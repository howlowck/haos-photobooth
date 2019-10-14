/* global GLOBAL_ENV */
import { get } from 'lodash'
import axios from 'axios'
import { START_DSLR_SEQUENCE, endDslrSequence } from 'actions/dslr'

function captureImageFromWebcam () {
  console.log('capturing image from webcam!!')
  const vid = document.querySelector('#video-element')
  const canvas = document.createElement('canvas') // create a canvas
  const ctx = canvas.getContext('2d') // get its context
  canvas.width = vid.videoWidth // set its size to the one of the video
  canvas.height = vid.videoHeight
  ctx.drawImage(vid, 0, 0) // the video
  canvas.toBlob((blob) => {
    const data = new FormData()
    data.append('photo', blob, 'photo1.JPG')
    axios.post(GLOBAL_ENV.PHOTO_PATH, data)
  }, 'image/jpeg')
}

export default (action$, { getState }) => {
  const obs = action$
    .ofType(START_DSLR_SEQUENCE)
    .filter(() => {
      const state = getState()
      return get(state, 'countdownTimer.secondsLeft') === 0
    })
    .do(captureImageFromWebcam)
    .mapTo(endDslrSequence())

  return obs
}

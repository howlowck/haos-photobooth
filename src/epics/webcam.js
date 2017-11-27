import { get } from 'lodash'
import { START_DSLR_SEQUENCE, endDslrSequence } from 'actions/dslr'

function captureImageFromWebcam () {
  // TODO: needs to get the canvas context somehow 🤔
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

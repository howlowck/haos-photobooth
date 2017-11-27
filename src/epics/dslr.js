/* global AudioContext */
import { get } from 'lodash'
import { START_DSLR_SEQUENCE, endDslrSequence } from 'actions/dslr'
// import { SET_COUNTDOWN_SECOND, setCountdownSecond } from 'actions/countdown'

const fireTrigger = () => {
  const audio = new AudioContext()
  const oscillator = audio.createOscillator()
  oscillator.type = 'sine'
  oscillator.connect(audio.destination)
  oscillator.start()
  setTimeout(() => {
    oscillator.stop()
  }, 1500)
}

export default (action$, { getState }) => {
  const obs = action$
    .ofType(START_DSLR_SEQUENCE)
    .filter(() => {
      const state = getState()
      return get(state, 'countdownTimer.secondsLeft') === 0
    })
    .do(fireTrigger)
    .mapTo(endDslrSequence())

  return obs
}

import { connect } from 'react-redux'
import CountdownOverlay from './CountdownOverlay'
import { decrementCountdown, hideCountdown } from 'actions/countdown'
import { startDslrSequence } from 'actions/dslr'

const getMessage = (state) => {
  const index = state.photos.length
  const messages = ['Look at the Canon Camera!', 'Be Happy!!!', 'Be Goofy!!']
  return messages[index]
}

const mapStateToProps = (state) => ({
  visible: state.countdownTimer.visible,
  seconds: state.countdownTimer.secondsLeft,
  message: getMessage(state)
})

const mapDispatchToProps = (dispatch) => ({
  onChangePerSecond: () => {
    dispatch(decrementCountdown())
  },
  onComplete: () => {
    dispatch(hideCountdown())
    dispatch(startDslrSequence())
  }
})

const CountdownOverlayContainer = connect(mapStateToProps, mapDispatchToProps)(CountdownOverlay)

export default CountdownOverlayContainer

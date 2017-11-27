import {
  DECREMENT_COUNTDOWN,
  RESET_COUNTDOWN,
  SET_COUNTDOWN_MESSAGE,
  HIDE_COUNTDOWN } from 'actions/countdown'

export default (prevState = {}, action) => {
  // Add your action conditionals here
  if (action.type === DECREMENT_COUNTDOWN) {
    let secondsLeft = prevState.secondsLeft - 1
    return {
      ...prevState,
      secondsLeft
    }
  }

  if (action.type === RESET_COUNTDOWN) {
    return {
      ...prevState,
      secondsLeft: prevState.duration,
      visible: true
    }
  }

  if (action.type === SET_COUNTDOWN_MESSAGE) {
    return {
      ...prevState,
      message: action.data
    }
  }

  if (action.type === HIDE_COUNTDOWN) {
    return {
      ...prevState,
      visible: false
    }
  }

  return { ...prevState }
}

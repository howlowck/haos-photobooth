export const SET_COUNTDOWN_SECOND = 'SET_COUNTDOWN_SECOND'
export const SET_COUNTDOWN_MESSAGE = 'SET_COUNTDOWN_MESSAGE'
export const DECREMENT_COUNTDOWN = 'DECREMENT_COUNTDOWN'
export const RESET_COUNTDOWN = 'RESET_COUNTDOWN'
export const COUNTDOWN_DURATION = 'COUNTDOWN_DURATION'
export const HIDE_COUNTDOWN = 'HIDE_COUNTDOWN'
// Add Action String Constant Here (do not delete this line)

export const setCountdownSecond = (data) => ({
  type: SET_COUNTDOWN_SECOND,
  data
})

export const setCountdownMessage = (data) => ({
  type: SET_COUNTDOWN_MESSAGE,
  data
})

export const decrementCountdown = (data) => ({
  type: DECREMENT_COUNTDOWN,
  data
})

export const resetCountdown = (data) => ({
  type: RESET_COUNTDOWN,
  data
})

export const countdownDuration = (data) => ({
  type: COUNTDOWN_DURATION,
  data
})

export const hideCountdown = (data) => ({
  type: HIDE_COUNTDOWN,
  data
})

// Add Action Creator Here (do not delete this line)

export const START_SESSION = 'START_SESSION'
export const STOP_SESSION = 'STOP_SESSION'
export const RESTART_SESSION = 'RESTART_SESSION'
// Add Action String Constant Here (do not delete this line)

export const startSession = (data) => ({
  type: START_SESSION,
  data
})

export const stopSession = (data) => ({
  type: STOP_SESSION,
  data
})

export const restartSession = (data) => ({
  type: RESTART_SESSION,
  data
})

// Add Action Creator Here (do not delete this line)

import { START_SESSION, STOP_SESSION } from 'actions/session'

export default (prevState = {}, action) => {
  // Add your action conditionals here
  if (action.type === START_SESSION) {
    return {
      ...prevState,
      started: true
    }
  }

  if (action.type === STOP_SESSION) {
    return {
      ...prevState,
      started: false
    }
  }

  return { ...prevState }
}

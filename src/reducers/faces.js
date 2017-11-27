import { START_SESSION } from 'actions/session'

export default (prevState = [], action) => {
  // Add your action conditionals here
  if (action.type === START_SESSION) {
    return []
  }

  if (action.type === 'message' && action.data.name === 'client/foundPersons') {
    let persons = action.data.payload
    console.log(persons)
    return [...persons]
  }

  return [ ...prevState ]
}

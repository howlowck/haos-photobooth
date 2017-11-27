import { END_DSLR_SEQUENCE } from 'actions/dslr'
export default (prevState = [], action) => {
  // Add your action conditionals here
  if (action.type === END_DSLR_SEQUENCE) {
    return [...prevState, { triggered: true }]
  }

  if (action.type === 'socket/wipePhotos') {
    return []
  }

  if (action.type === 'message' && action.data.name === 'client/newPhoto') {
    let i

    prevState.forEach((photo, index, arr) => {
      if (!photo.path) {
        i = index
      }
    })

    let modifiedPhoto = prevState[i]
    let { photoName } = action.data.payload

    return [
      ...prevState.slice(0, i),
      { ...modifiedPhoto, path: `/photos/${photoName}` },
      ...prevState.slice(i + 1)
    ]
  }

  return [ ...prevState ]
}

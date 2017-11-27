import { combineReducers } from 'redux'
import locationReducer from './location'
import photoSessionReducer from 'reducers/photoSession'
import countdownTimerReducer from 'reducers/countdownTimer'
import printerReducer from 'reducers/printer'
import photosReducer from 'reducers/photos'
import facesReducer from 'reducers/faces'
// Import Reducers Here (do not delete this line)

export const makeRootReducer = (asyncReducers) => {
  return combineReducers({
    location: locationReducer,
    photoSession: photoSessionReducer,
    countdownTimer: countdownTimerReducer,
    printer: printerReducer,
    photos: photosReducer,
    faces: facesReducer,
    // Add Reducers Here (do not delete this line)
    ...asyncReducers
  })
}

export const injectReducer = (store, { key, reducer }) => {
  if (Object.hasOwnProperty.call(store.asyncReducers, key)) return

  store.asyncReducers[key] = reducer
  store.replaceReducer(makeRootReducer(store.asyncReducers))
}

export default makeRootReducer

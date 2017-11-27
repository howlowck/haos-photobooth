import { applyMiddleware, compose, createStore as createReduxStore } from 'redux'
import { browserHistory } from 'react-router'
import makeRootReducer from './reducers'
import { updateLocation } from './location'
import { createEpicMiddleware } from 'redux-observable'
import { rootEpic } from './epics'
import client from 'socket.io-client'
import createSocketIoMiddleware from 'redux-socket.io'
import saveLocalStorage from 'middlewares/saveSheetsToLocalStorage'

// Socket IO Client
// ------------------------------------
const socket = client('http://localhost:3000')
const socketIoMiddleware = createSocketIoMiddleware(socket, 'socket/')

socket.on('connect', () => {
  console.log('socket connected!!!')
})

const createStore = (initialState = {}, {imageInput, faceRec}) => {
  const epicMiddleware = createEpicMiddleware(rootEpic(imageInput))

  // ======================================================
  // Middleware Configuration
  // ======================================================
  const middleware = [epicMiddleware, socketIoMiddleware, saveLocalStorage]

  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = []
  let composeEnhancers = compose

  if (__DEV__) {
    if (typeof window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ === 'function') {
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createReduxStore(
    makeRootReducer(),
    initialState,
    composeEnhancers(
      applyMiddleware(...middleware),
      ...enhancers
    )
  )
  store.asyncReducers = {}

  // To unsubscribe, invoke `store.unsubscribeHistory()` anytime
  store.unsubscribeHistory = browserHistory.listen(updateLocation(store))

  if (module.hot) {
    module.hot.accept('./reducers', () => {
      const reducers = require('./reducers').default
      store.replaceReducer(reducers(store.asyncReducers))
    })
  }

  return store
}

export default createStore

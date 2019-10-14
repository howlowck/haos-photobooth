/* globals GLOBAL_ENV */

import React from 'react'
import ReactDOM from 'react-dom'
import 'rxjs'

import createStore from './store/createStore'
import './styles/main.scss'
import initialState from './initialState'

// Render Setup
// ------------------------------------
const MOUNT_NODE = document.getElementById('root')
const imageInput = GLOBAL_ENV.INPUT_TYPE
const faceRec = GLOBAL_ENV.USE_FACE_REC
const config = { imageInput, faceRec: +faceRec }

console.log('USE_FACE_API!!!!!', GLOBAL_ENV.USE_FACE_REC)

// Store Initialization
// ------------------------------------
const store = createStore(initialState, config)

let render = () => {
  const App = require('./components/App').default
  const routes = require('./routes/index').default(store)

  ReactDOM.render(
    <App store={store} routes={routes} />,
    MOUNT_NODE
  )
}

// Development Tools
// ------------------------------------
if (__DEV__) {
  if (module.hot) {
    const renderApp = render
    const renderError = (error) => {
      const RedBox = require('redbox-react').default

      ReactDOM.render(<RedBox error={error} />, MOUNT_NODE)
    }

    render = () => {
      try {
        renderApp()
      } catch (e) {
        console.error(e)
        renderError(e)
      }
    }

    // Setup hot module replacement
    module.hot.accept([
      './components/App',
      './routes/index'
    ], () =>
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE)
        render()
      })
    )
  }
}

// Let's Go!
// ------------------------------------
if (!__TEST__) render()

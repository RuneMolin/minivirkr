import 'bootswatch/dist/superhero/bootstrap.min.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import logger from 'redux-logger'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers'
import MiniVirkr from './app'

// Create the applications store, which contains the state of the application
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, logger)
)

// Create somewhere to hang React
let root = document.createElement('div')
document.body.appendChild(root)

ReactDOM.render(
  <Provider store={store}>
    <MiniVirkr/>
  </Provider>
, root)

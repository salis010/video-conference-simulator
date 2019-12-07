import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './redux-components/store'
import { App } from './components/app'

const mountNode = document.getElementById('mountNode')

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  mountNode
)

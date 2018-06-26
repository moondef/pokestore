import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { injectGlobal } from 'styled-components'

import { Routes } from './routes'
import { store } from './store'
import { globalStyles } from './ui/theme'

injectGlobal`${globalStyles}`

ReactDOM.render(
  (
    <Provider store={store}>
      <Router>
        <Routes />
      </Router>
    </Provider>
  ), document.getElementById('root'))

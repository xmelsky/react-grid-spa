import React from 'react'
import ReactDOM from 'react-dom'
import { GlobalState } from './context'

import '../node_modules/normalize-css/normalize.css'

import App from './App'
import './index.scss'

ReactDOM.render(
  <GlobalState>
    <App />
  </GlobalState>,
  document.getElementById('root')
)

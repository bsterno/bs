import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Layout from 'components/Layout/Layout.js'

import './app.css'

const App = () => (
  <Router>
    <Layout />
  </Router>
)

export default hot(module)(App)

import React from 'react'
import ReactDOM from 'react-dom'
import ReactGA from 'react-ga'
//
import 'bootstrap/dist/css/bootstrap.css';

// Your top level component
import App from './App'

// Export your top level component as JSX (for static rendering)
export default App

// Render your app
if (typeof document !== 'undefined') {
  ReactGA.initialize('UA-126369929-1');
  ReactGA.pageview(window.location.pathname + window.location.search);

  const renderMethod = module.hot ? ReactDOM.render : ReactDOM.hydrate || ReactDOM.render
  const render = Comp => {
    renderMethod(<Comp />, document.getElementById('root'))
  }

  // Render!
  render(App)
}

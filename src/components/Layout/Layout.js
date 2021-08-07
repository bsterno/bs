import React, { Component, Fragment } from 'react'
//
import Routes from 'react-static-routes'
import Header from '../Navigation/Header/Header.js'
import Head from '../Head/Head.js'

class Layout extends Component {
  render () {
    return (
      <Fragment>
        <Head />
        <Header />
        <div className="content">
          <Routes />
        </div>
      </Fragment>
    )
  }
}

export default Layout;

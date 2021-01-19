import { Router, Link } from 'react-static'
import React, { Component, Fragment } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//
import Routes from 'react-static-routes'
import Header from '../Navigation/Header/Header.js'
import Loading from '../UI/Loading/Loading.js'
import Head from '../Head/Head.js'

class Layout extends Component {
  render () {
    return (
      <Fragment>
        <Head />
        <ReactCSSTransitionGroup
          transitionName="loading"
          transitionEnterTimeout={0}
          transitionLeaveTimeout={300}>
          <Loading />
        </ReactCSSTransitionGroup>
        <Header />
        <div className="content">
          <Routes />
        </div>
      </Fragment>
    )
  }
}

export default Layout;

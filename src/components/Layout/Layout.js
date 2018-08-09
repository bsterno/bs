import { Router, Link } from 'react-static'
import React, { Component, Fragment } from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
//
import Header from '../Navigation/Header/Header.js'
import Routes from 'react-static-routes'
import Loading from '../UI/Loading/Loading.js'

class Layout extends Component {

  state = {
    loading: true
  }

  componentDidMount() {
    setTimeout( () => this.setState({ loading: false }), 1500 );
  }

  render () {
    return (
      <Fragment>
        <ReactCSSTransitionGroup
          transitionName="loading"
          transitionEnterTimeout={0}
          transitionLeaveTimeout={300}>
          { this.state.loading ? <Loading /> : null }
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
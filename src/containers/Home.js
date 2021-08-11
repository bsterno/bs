import React, { Fragment } from 'react'
import { withSiteData } from 'react-static'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
//
import CaseStudies from '../components/CaseStudies/CaseStudies.js'
import GithubActivities from '../components/GithubActivities/GithubActivities.js'
import Profile from '../components/Profile/Profile.js'
import Contact from '../components/Contact/Contact.js'
import Loading from '../components/UI/Loading/Loading.js'

export default withSiteData(() => (
  <Fragment>
    <ReactCSSTransitionGroup
      transitionName="loading"
      transitionEnterTimeout={0}
      transitionLeaveTimeout={300}>
      <Loading />
    </ReactCSSTransitionGroup>
    <Profile />
    <CaseStudies />
    <GithubActivities />
    <Contact />
  </Fragment>
))

import React, { Fragment } from 'react'
import { withSiteData } from 'react-static'
//
import CaseStudies from '../components/CaseStudies/CaseStudies.js'
import GithubActivities from '../components/GithubActivities/GithubActivities.js'
import Profile from '../components/Profile/Profile.js'
import Contact from '../components/Contact/Contact.js'

export default withSiteData(() => (
  <Fragment>
    <Profile />
    <CaseStudies />
    <GithubActivities />
    <Contact />
  </Fragment>
))

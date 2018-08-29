import React from 'react'
import { withSiteData } from 'react-static'
//
import CaseStudies from '../components/CaseStudies/CaseStudies.js'
import GithubActivities from '../components/GithubActivities/GithubActivities.js'
import Profile from '../components/Profile/Profile.js'

export default withSiteData(() => (
  <div>
    <Profile />
    <CaseStudies />
    <GithubActivities />
  </div>
))

import React from 'react'
import { withSiteData } from 'react-static'
//
import CaseStudies from '../components/CaseStudies/CaseStudies.js'
import Profile from '../components/Profile/Profile.js'

export default withSiteData(() => (
  <div>
    <Profile />
    <CaseStudies />
  </div>
))

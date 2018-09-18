import { Router, Link } from 'react-static'
import React from 'react'
//
import './NavigationItems.css'
import githubIcon from '../../../assets/images/icons/github.png'

export default () => (
  <nav>
    <Link to="/#work">Work</Link>
    <Link to="/#gh" className="nav-icon">
      <img src={githubIcon} />
    </Link>
    {/* <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link> */}
  </nav>
)

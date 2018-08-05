import { Router, Link } from 'react-static'
import React from 'react'
//

export default () => (
  <nav>
    <Link exact to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/blog">Blog</Link>
  </nav>
)

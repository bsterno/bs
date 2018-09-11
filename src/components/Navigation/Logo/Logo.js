import { Router, Link } from 'react-static'
import React from 'react'
//
import './Logo.css'

const logo = (props) => (
  <Link exact to="/" className="logo">
    <span>B</span>
  </Link>
);

export default logo;

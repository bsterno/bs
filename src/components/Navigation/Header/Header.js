import { Router, Link } from 'react-static'
import React from 'react'
//
import NavigationItems from '../NavigationItems/NavigationItems.js'
import Logo from '../Logo/Logo.js'
import './Header.css'

export default () => (
  <header className="header">
    <Logo />
    <NavigationItems />
  </header>
)

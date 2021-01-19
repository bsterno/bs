import React from 'react'
//
import githubIcon from '../../assets/images/icons/github.png'
import instagramIcon from '../../assets/images/icons/instagram.png'
import linkedinIcon from '../../assets/images/icons/linkedin.png'
import mailIcon from '../../assets/images/icons/mail.png'
import twitterIcon from '../../assets/images/icons/twitter.png'
import saLogo from '../../assets/images/Projects/sa-logo.png'
import './Profile.css'

const profile = (props) => (
  <section className="row profile">
    <div className="profile-bio">
      <h1>Hello. I'm Brian Stern - a <span>Web</span> & <span>App Engineer</span> that gets a kick out of building beautiful interfaces for the web, currently living and working in NYC.</h1>
      <h4>Working at <span><a href="https://smartasset.com/" target="_blank"><img src={saLogo} /></a></span></h4>
      <div className="social-icons">
        <a href="https://github.com/bsterno" target="_blank">
          <img src={githubIcon} />
        </a>
        <a href="https://www.linkedin.com/in/sternbrian/" target="_blank">
          <img src={linkedinIcon} />
        </a>
        <a href="https://twitter.com/bstern90" target="_blank">
          <img src={twitterIcon} />
        </a>
        <a href="https://www.instagram.com/bsterno/" target="_blank">
          <img src={instagramIcon} />
        </a>
        <a href="mailto:briansternhk@gmail.com?Subject=Hey!">
          <img src={mailIcon} />
        </a>
      </div>
    </div>
  </section>
)

export default profile;

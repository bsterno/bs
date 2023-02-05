import React from 'react'
//
import githubIcon from '../../assets/images/icons/github.png'
import instagramIcon from '../../assets/images/icons/instagram.png'
import linkedinIcon from '../../assets/images/icons/linkedin.png'
import mailIcon from '../../assets/images/icons/mail.png'
import twitterIcon from '../../assets/images/icons/twitter.png'
import coaLogo from '../../assets/images/Projects/coa-logo.svg'
import './Profile.css'

const profile = () => (
  <section className="row profile">
    <div className="profile-bio">
      <h1>Hello. I'm Brian Stern - a <span>Web</span> & <span>App Engineer</span> that gets a kick out of building beautiful interfaces for the web, currently living and working in NYC.</h1>
      <h4>Product Engineer at <span><a href="https://smartasset.com/" target="_blank" rel="noopener noreferrer"><img src={coaLogo} alt="coa logo" /></a></span></h4>
      <div className="social-icons">
        <a href="https://github.com/bsterno" target="_blank" rel="noopener noreferrer">
          <img src={githubIcon} alt="github icon" />
        </a>
        <a href="https://www.linkedin.com/in/sternbrian/" target="_blank" rel="noopener noreferrer">
          <img src={linkedinIcon} alt="linked-in icon"/>
        </a>
        {/* <a href="https://twitter.com/bstern90" target="_blank" rel="noopener noreferrer">
          <img src={twitterIcon} alt="twitter icon" />
        </a> */}
        <a href="https://www.instagram.com/bsterno/" target="_blank" rel="noopener noreferrer">
          <img src={instagramIcon} alt="instagram icon"/>
        </a>
        <a href="mailto:briansternhk@gmail.com?Subject=Hey!">
          <img src={mailIcon} alt="email icon" />
        </a>
      </div>
    </div>
  </section>
)

export default profile;

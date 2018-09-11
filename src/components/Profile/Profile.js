import React from 'react'
//
import githubIcon from '../../assets/images/icons/github.png'
import instagramIcon from '../../assets/images/icons/instagram.png'
import linkedinIcon from '../../assets/images/icons/linkedin.png'
import mailIcon from '../../assets/images/icons/mail.png'
import twitterIcon from '../../assets/images/icons/twitter.png'
import './Profile.css'

const profile = (props) => (
  <section className="row profile">
    <div className="profile-bio">
      <h1>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas fermentum, sem in pharetra pellentesque, velit turpis volutpat ante, in pharetra metus odio a lectus. Nam sed tellus id magna elementum tincidunt.</h1>
      <div className="social-icons">
        <a href="" target="_blank">
          <img src={githubIcon} />
        </a>
        <a href="" target="_blank">
          <img src={linkedinIcon} />
        </a>
        <a href="" target="_blank">
          <img src={twitterIcon} />
        </a>
        <a href="" target="_blank">
          <img src={instagramIcon} />
        </a>
        <a href="" target="_blank">
          <img src={mailIcon} />
        </a>
      </div>
    </div>
  </section>
)

export default profile;

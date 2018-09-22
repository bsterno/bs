import { Router, Link } from 'react-static'
import React, { Component } from 'react'
//
import './Page404.css'
import astronaut from '../../../assets/images/404/astronaut.png'
import pickle from '../../../assets/images/404/pickle-rick.gif'

const Template1 = () => (
  <div className="section-404">
    <h1>404 - Uh oh! Looks like you're lost :(</h1>
    <img className="floater" src={astronaut} />
    <Link className="back-home hover-link" exact to="/">Hitch a ride back to home base</Link>
  </div>
)

const Template2 = () => (
  <div className="section-404">
    <h1>404 - Aw geez! Seems you're in quite the pickle :(</h1>
    <img className="floater" src={pickle} />
    <Link className="back-home hover-link" exact to="/">Head on back to Dimension C-137</Link>
  </div>
)

const templates = [
  <Template1 />,
  <Template2 />
]

class Page404 extends Component {
  componentDidMount() {
    document.body.classList.add('page-404');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-404');
  }

  render() {
    return (
      <section className="row">
        <div className="twinkling"></div>
        {templates[Math.floor(Math.random()*templates.length)]}
      </section>
    )
  }
}

export default Page404;

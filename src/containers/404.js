import { Router, Link } from 'react-static'
import React, { Component } from 'react'
//
import './404.css'

const Foo = () => (
  <h1>Foo</h1>
)

const Bar = () => (
  <h1>Bar</h1>
)

const arr = [
  <Foo />,
  <Bar />
]

class Page404 extends Component {
  componentWillMount() {
    document.body.classList.add('page-404');
  }

  componentWillUnmount() {
    document.body.classList.remove('page-404');
  }

  render() {
    return (
      <section className="row">
        <div className="twinkling"></div>
        <h1>404 - Oh no's! We couldn't find that page :(</h1>
        {arr[Math.floor(Math.random()*arr.length)]}
      </section>
    )
  }
}

export default Page404;

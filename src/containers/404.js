import { Router, Link } from 'react-static'
import React from 'react'
//

const Foo = () => (
  <h1>Foo</h1>
)

const Blah = () => (
  <h1>Blah</h1>
)

const arr = [
  <Foo />,
  <Blah />
]

export default () => (
  <div>
    <h1>404 - Oh no's! We couldn't find that page :(</h1>
      {arr[Math.floor(Math.random()*arr.length)]}
  </div>
)

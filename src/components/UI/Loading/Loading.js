import { Router, Link } from 'react-static'
import React, { Component } from 'react'
//
import loadingIcon from '../../../assets/images/0kvtMLE.gif';
import './Loading.css'

class Loading extends Component {


  render () {
    return (
      <div className="load-screen">
        <img src={loadingIcon} />
      </div>
    )
  }
};

export default Loading;

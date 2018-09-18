import React from 'react'
//
import loadingIcon from '../../../assets/images/duck.gif';
import './Loading.css'

const loading = () => (
  <div className="load-screen">
    <img src={loadingIcon} />
  </div>
)

export default loading;

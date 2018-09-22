import React from 'react'
//
import loadingIcon from '../../../assets/images/duck.gif';
import reactIcon from '../../../assets/images/icons/react.png';
import './Loading.css'

const loading = () => (
  <div className="load-screen">
    <div className="load-content">
      <img className="load-icon" src={loadingIcon} />
      <div className="built-with col-12">
        <p>Built with React</p><img src={reactIcon} />
      </div>
    </div>
  </div>
)

export default loading;

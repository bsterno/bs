import React from 'react'
import PropTypes from 'prop-types'
//

const caseStudy = (props) => (
  <div className="case-study">
    <a href={props.link} target="_blank">
      <div className="overlay">
        <span>{props.client}</span>
      </div>
    </a>
  </div>
)

caseStudy.propTypes = {
  client: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired
}

export default caseStudy;

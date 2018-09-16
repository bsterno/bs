import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
//
import './CaseStudy.css'

const caseStudy = (props) => {
  return (
    <div className="col-sm-6 d-flex">
      <Card>
        <a href={props.link} target="_blank">
          <CardImg top width="100%" src={props.image} alt="Card image cap" />
        </a>
        <CardBody>
          <CardTitle><a className="hover-link" href={props.link} target="_blank">{props.client}</a></CardTitle>
        </CardBody>
      </Card>
    </div>
  );
};

caseStudy.propTypes = {
  client: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default caseStudy;

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
          <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
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
  link: PropTypes.string.isRequired
}

export default caseStudy;

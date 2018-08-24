import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
//

const caseStudy = (props) => {
  return (
    <div className="col-md-4 d-flex">
      <Card>
        <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.client}</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
          <Button href={props.link} target="_blank">Button</Button>
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

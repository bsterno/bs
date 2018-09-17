import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';
//
import './CaseStudy.css'

class CaseStudy extends Component {
  constructor() {
    super();

    this.handleHover = this.handleHover.bind(this);

    this.state = {
      isHovered: false
    }
  }

  handleHover() {
    this.setState({
      isHovered: !this.state.isHovered
    });
  }

  render(props) {
    const cardImgClass = this.state.isHovered ? "card-img-top hover" : "";

    return (
      <div className="col-sm-6 d-flex">
        <Card>
          <a href={this.props.link} target="_blank">
            <CardImg className={cardImgClass} top width="100%" src={this.props.image} alt="Card image cap" />
          </a>
          <CardBody>
            <CardTitle><a className="hover-link" onMouseEnter={this.handleHover} onMouseLeave={this.handleHover} href={this.props.link} target="_blank">{this.props.client}</a></CardTitle>
          </CardBody>
        </Card>
      </div>
    )
  }
}

CaseStudy.propTypes = {
  client: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
}

export default CaseStudy;

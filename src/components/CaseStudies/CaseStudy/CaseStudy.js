import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardImg,
  CardText,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
//
import "./CaseStudy.css";

class CaseStudy extends Component {
  constructor() {
    super();

    this.handleHover = this.handleHover.bind(this);

    this.state = {
      isHovered: false,
    };
  }

  handleHover() {
    this.setState({
      isHovered: !this.state.isHovered,
    });
  }

  render(props) {
    const hoverClass = this.state.isHovered ? "hover" : "";

    return (
      <div className="col-sm-6 d-flex">
        <Card className={hoverClass}>
          <a
            href={this.props.link}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={this.handleHover}
            onMouseLeave={this.handleHover}
          >
            <CardImg
              top
              width="100%"
              src={this.props.image}
              alt="Card image cap"
            />
          </a>
          <CardTitle>
            <a
              className="hover-link"
              onMouseEnter={this.handleHover}
              onMouseLeave={this.handleHover}
              href={this.props.link}
              target="_blank"
            >
              {this.props.client}
            </a>
          </CardTitle>
        </Card>
      </div>
    );
  }
}

CaseStudy.propTypes = {
  client: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default CaseStudy;

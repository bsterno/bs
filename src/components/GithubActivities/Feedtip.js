import React, { Component, Fragment } from 'react';
import { Tooltip } from 'reactstrap';

class Feedtip extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);

    this.state = {
      toolTipOpen: false
    }
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  render() {
    return (
      <Fragment>
        <span className="tool-tip" id="ghTip">i</span>
        <Tooltip placement="bottom" isOpen={this.state.tooltipOpen} target="ghTip" toggle={this.toggle}>
          This feed doesn't include any contributions to private repos!
        </Tooltip>
      </Fragment>
    )
  }
}

export default Feedtip;

import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { Media } from 'reactstrap';
import Feedtip from './Feedtip.js';
//
import './GithubActivities.css'

class GithubActivities extends Component {
  constructor() {
    super();

    this.toggle = this.toggle.bind(this);

    this.state = {
      events: [],
      toolTipOpen: false
    }
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }

  componentDidMount() {
    fetch('https://api.github.com/users/bsterno/events')
    .then(results => {
      return results.json();
    }).then(data => {
      let eventsData = data.slice(0, 8);
      this.setState({
        events: eventsData
      })
    })
  }

  render() {

    let defineVerbiage = (obj, term) => {
      if (term.includes('Push')) {
        return 'pushed code to '
      } else if (term.includes('Watch')) {
        return 'starred '
      } else if (term.includes('Pull')) {
        return 'created a pull request in '
      } else if ( (obj.payload.ref_type === 'repository') && (term.includes('Create')) ) {
        return 'created the repository ';
      } else if ( (term.includes('Create') && ((obj.payload.ref_type === 'branch') || (obj.payload.ref_type === 'tag'))) ) {
        return 'created a ' + obj.payload.ref_type + ' in ';
      } else if ( (term.includes('Delete') && ((obj.payload.ref_type === 'branch') || (obj.payload.ref_type === 'tag'))) ) {
        return 'deleted a ' + obj.payload.ref_type + ' in ';
      } else {
        return term
      }
    }

    const ghEvents = Object.keys(this.state.events)
      .map(event => {
        let eventObj = this.state.events[event];
        let typeVerbiage = defineVerbiage(eventObj, eventObj.type);
        let timeSince = moment(eventObj.created_at).fromNow();
        let eventLine = 'I ' + typeVerbiage + ' the repo ' + eventObj.repo.name + ' ' + timeSince;
        return (
          <Media key={eventObj.id}>
            <Media body>
              {eventLine}
            </Media>
          </Media>
        );
      })

    return (
      <section className="row gh" id="gh">
        <h2 className="col-12">Wonder what I've been developing lately? <a className="hover-link" href="https://youtu.be/i-QadwBCqQw?t=67" target="_blank">Check it out</a> below</h2>
        <div className="media-container">
          <Feedtip />
          {ghEvents}
          <p>. . .</p>
        </div>
        <div className="col-12">
          <h4>Or click <a className="hover-link" href="https://github.com/bsterno" target="_blank">here</a> to go to my GitHub!</h4>
        </div>
      </section>
    )
  }
}

export default GithubActivities;

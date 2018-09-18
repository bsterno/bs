import React, { Component, Fragment } from 'react';
import moment from 'moment';
import { Media } from 'reactstrap';
import Feedtip from './Feedtip.js';
//
import './GithubActivities.css'

class GithubActivities extends Component {
  constructor() {
    super();

    this.state = {
      events: []
    }
  }

  componentDidMount() {
    fetch('https://api.github.com/users/bsterno/events')
    .then(results => {
      return results.json();
    }).then(data => {
      let eventsData = data.slice(0, 5);
      this.setState({
        events: eventsData
      })
    })
  }

  shouldComponentUpdate(nextProps, nextState) {
    return this.state.events != nextState.events;
  }

  render() {
    const pushTerms = [
      'I pushed code to ',
      'I lost my soul and sanity in ',
      'I hopefully didn\'t let too many bugs loose in ',
      'I wrote some tasteful lines of code in ',
      'I gave blood, sweat and tears in adding to ',
      'I sat at home instead of going out to work on ',
      'Code flowed like electricity from my fingers into '
    ];
    const starTerms = [
      'I starred ',
      'I discovered and loved '
    ];
    const createTerms = [
      'I birthed ',
      'I created ',
      'I made my latest creation, ',
      'I gave birth to '
    ];

    let defineVerbiage = (obj, term) => {
      if (term.includes('Push')) {
        return pushTerms[Math.floor(Math.random()*pushTerms.length)]
      } else if (term.includes('Watch')) {
        return starTerms[Math.floor(Math.random()*starTerms.length)]
      } else if (term.includes('Pull')) {
        return 'created a pull request in '
      } else if ( (obj.payload.ref_type === 'repository') && (term.includes('Create')) ) {
        return createTerms[Math.floor(Math.random()*createTerms.length)]
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
        return (
          <Media key={eventObj.id}>
            <Media body>
              {typeVerbiage + ' the repo '} <span>{eventObj.repo.name}</span> {' ' + timeSince}
            </Media>
          </Media>
        );
      })

    return (
      <section className="row gh" id="gh">
        <h2 className="col-12">Wonder what I've been doing lately? <a className="hover-link" href="https://youtu.be/i-QadwBCqQw?t=67" target="_blank">Check it out</a> below</h2>
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

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
    .then(results => results.json()).then(data => {
      const eventsData = data.slice(0, 5);
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
      'I lost my soul and sanity in ',
      'I let lose some venomous bugs in ',
      'I wrote some tasteful lines of code in ',
      'Code flowed like electricity from my fingers into ',
      'I unleashed a torrent of code into ',
      'I slammed my keyboard and merged to production in '
    ];
    const starTerms = [
      'I found ',
      'I discovered ',
      'I found this through r/webdev or a github weekly post - '
    ];
    const createTerms = [
      // 'I created ',
      'Ladies and Gentlemen, my latest creation ',
      // 'I gave birth to '
    ];

    const defineVerbiage = (obj, term) => {
      if (term.includes('Push')) {
        return pushTerms[Math.floor(Math.random()*pushTerms.length)]
      } else if (term.includes('Watch')) {
        return starTerms[Math.floor(Math.random()*starTerms.length)]
      } else if (term.includes('Pull')) {
        return 'I created a pull request in '
      } else if ( (obj.payload.ref_type === 'repository') && (term.includes('Create')) ) {
        return createTerms[Math.floor(Math.random()*createTerms.length)]
      } else if ( (term.includes('Create') && ((obj.payload.ref_type === 'branch') || (obj.payload.ref_type === 'tag'))) ) {
        return `I created a ${  obj.payload.ref_type  } in `;
      } else if ( (term.includes('Delete') && ((obj.payload.ref_type === 'branch') || (obj.payload.ref_type === 'tag'))) ) {
        return `I deleted a ${  obj.payload.ref_type  } in `;
      } 
        return term
      
    }

    function convertUrl(repoUrl) {
      return repoUrl.replace('https://api.github.com/repos/', 'https://github.com/');
    }

    const ghEvents = Object.keys(this.state.events)
      .map(event => {
        const eventObj = this.state.events[event];
        const typeVerbiage = defineVerbiage(eventObj, eventObj.type);
        const timeSince = moment(eventObj.created_at).fromNow();
        const repoUrl = convertUrl(eventObj.repo.url);
        return (
          <Media key={eventObj.id}>
            <Media body>
              {typeVerbiage } <a className="hover-link" href={repoUrl} target="_blank">{eventObj.repo.name}</a> {` ${  timeSince}`}
            </Media>
          </Media>
        );
      })

    return (
      <section className="row gh" id="gh">
        <h2 className="col-12 heading">Interested in what I've been doing lately? <a className="hover-link" href="https://youtu.be/i-QadwBCqQw?t=67" target="_blank">Check it out</a> below</h2>
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

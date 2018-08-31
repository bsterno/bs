import React, { Component, Fragment } from 'react';
import moment from 'moment';
//

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
      console.log(this.state.events);
    })
  }

  render() {

    const ghEvents = Object.keys(this.state.events)
      .map(event => {
        let eventObj = this.state.events[event];
        return (
          <section className="row gh" key={eventObj.id}>
            <p className="col-12">Login: {eventObj.actor.login}</p>
            <p className="col-12">Type: {eventObj.type}</p>
            <p className="col-12">Repo: {eventObj.repo.name}</p>
            <p className="col-12">Repo: {eventObj.id}</p>
            <p className="col-12">Created: {moment(eventObj.created_at, "YYYYMMDD").fromNow()}</p>
          </section>
        );
      })

    return (
      <Fragment>
        {ghEvents}
      </Fragment>
    )
  }
}

export default GithubActivities;

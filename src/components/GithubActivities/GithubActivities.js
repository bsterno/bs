import React, { Component, Fragment } from 'react';
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
          <Fragment>
            <p className="col-12">Login: {eventObj.actor.login}</p>
            <p className="col-12">Type: {eventObj.type}</p>
            <p className="col-12">Repo: {eventObj.repo.name}</p>
            <p className="col-12">Created at: {eventObj.created_at}</p>
          </Fragment>
        );
      })

    return (
      <section class="row gh">
        {ghEvents}
      </section>
    )
  }
}

export default GithubActivities;

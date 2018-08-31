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

    let defineVerbiage = (obj, term) => {
      if (term.includes('Push')) {
        return 'pushed code to '
      } else if (term.includes('Watch')) {
        return 'starred '
      } else if (term.includes('Pull')) {
        return 'created a pull request in '
      } else if ( (obj.payload.ref_type === 'repository') && (term.includes('Create')) ) {
        return 'created the repository ';
      } else if ( ((obj.payload.ref_type === 'branch') || (obj.payload.ref_type === 'tag')) && (term.includes('Create')) ) {
        return 'created a ' + obj.payload.ref_type + ' in ';
      } else {
        return term
      }
    }

    const ghEvents = Object.keys(this.state.events)
      .map(event => {
        let eventObj = this.state.events[event];
        let typeVerbiage = defineVerbiage(eventObj, eventObj.type);
        return (
          <Fragment>
            <p className="col-12">Login: {eventObj.actor.login}</p>
            <p className="col-12">Type: {typeVerbiage}</p>
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

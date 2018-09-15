import React, { Component } from 'react';
//
import CaseStudy from './CaseStudy/CaseStudy.js'


const caseStudyList = {
  "Norman and Jules": {
    "url": "https://normanandjules.com/",
  },
  "Progressive Punctuation": {
    "url": "http://progressivepunctuation.com/"
  },
  "NewsCred Insights": {
    "url": "https://insights.newscred.com/"
  },
  "NewsCred": {
    "url": "https://www.newscred.com/"
  },
  "The Free Ride": {
    "url": "http://thefreeride.com/"
  },
  "Amalgam": {
    "url": "http://amalgam.co/"
  },
  "ViTA World": {
    "url": "http://vita.world/"
  },
  "InsuraMatch": {
    "url": "https://www.insuramatch.com/"
  },
  "Foray Collective": {
    "url": "https://www.shopforay.com/"
  },
  "Extra Mile": {
    "url": "https://extramile.thehartford.com/"
  },
  "Kele": {
    "url": "https://www.kele.com/"
  }
};

class CaseStudies extends Component {
  render () {
    const caseTiles = Object.keys(caseStudyList)
      .map(client => {
        return (
          <CaseStudy client={client} link={caseStudyList[client].url} key={client}/>
        );
      })

    return (
      <section className="row case-studies" id="work">
        {caseTiles}
      </section>
    )
  }
}

export default CaseStudies;

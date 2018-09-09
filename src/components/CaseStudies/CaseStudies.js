import React, { Component } from 'react';
//
import CaseStudy from './CaseStudy/CaseStudy.js'


const caseStudyList = {
  "Norman and Jules": "https://normanandjules.com/",
  "Progressive Punctuation": "http://progressivepunctuation.com/",
  "NewsCred Insights": "https://insights.newscred.com/",
  "NewsCred": "https://www.newscred.com/",
  "The Free Ride": "http://thefreeride.com/",
  "Amalgam": "http://amalgam.co/",
  "ViTA World": "http://vita.world/",
  "InsuraMatch": "https://www.insuramatch.com/",
  "Foray Collective": "https://www.shopforay.com/",
  "Extra Mile": "https://extramile.thehartford.com/",
  "Kele": "https://www.kele.com/"
};

class CaseStudies extends Component {
  render () {
    const caseTiles = Object.keys(caseStudyList)
      .map(client => {
        return (
          <CaseStudy client={client} link={caseStudyList[client]} key={client}/>
        );
      })

    return (
      <section className="row case-studies">
        {caseTiles}
      </section>
    )
  }
}

export default CaseStudies;

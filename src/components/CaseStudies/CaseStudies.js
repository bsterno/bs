import React, { Component } from 'react';
//
import CaseStudy from './CaseStudy/CaseStudy.js'
import njImg from '../../assets/images/Projects/NJ.png'
import ppImg from '../../assets/images/Projects/PP.png'
import ncInsightsImg from '../../assets/images/Projects/NewscredInsights.png'
import ncImg from '../../assets/images/Projects/Newscred.png'
import tfrImg from '../../assets/images/Projects/TFR.png'
import amalgamImg from '../../assets/images/Projects/Amalgam.png'
import vitaImg from '../../assets/images/Projects/Vita.png'
import insuramatchImg from '../../assets/images/Projects/Insuramatch.png'
import forayImg from '../../assets/images/Projects/Foray.png'
import emImg from '../../assets/images/Projects/ExtraMile.png'
import keleImg from '../../assets/images/Projects/Kele.png'

const caseStudyList = {
  "Norman and Jules": {
    "url": "https://normanandjules.com/",
    "image": njImg
  },
  "Progressive Punctuation": {
    "url": "http://progressivepunctuation.com/",
    "image": ppImg
  },
  "NewsCred Insights": {
    "url": "https://insights.newscred.com/",
    "image": ncInsightsImg
  },
  "NewsCred": {
    "url": "https://www.newscred.com/",
    "image": ncImg
  },
  "The Free Ride": {
    "url": "http://thefreeride.com/",
    "image": tfrImg
  },
  "Amalgam": {
    "url": "http://amalgam.co/",
    "image": amalgamImg
  },
  "ViTA World": {
    "url": "http://vita.world/",
    "image": vitaImg
  },
  "InsuraMatch": {
    "url": "https://www.insuramatch.com/",
    "image": insuramatchImg
  },
  "Foray Collective": {
    "url": "https://www.shopforay.com/",
    "image": forayImg
  },
  "Extra Mile": {
    "url": "https://extramile.thehartford.com/",
    "image": emImg
  },
  "Kele": {
    "url": "https://www.kele.com/",
    "image": keleImg
  }
};

class CaseStudies extends Component {
  render () {
    const caseTiles = Object.keys(caseStudyList)
      .map(client => {
        return (
          <CaseStudy client={client} link={caseStudyList[client].url} image={caseStudyList[client].image} key={client}/>
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

import React, { Component } from 'react';
//
import CaseStudy from './CaseStudy/CaseStudy.js'


const caseStudyList = {
  "Norman and Jules": "https://normanandjules.com/",
  "Progressive Punctuation": "http://progressivepunctuation.com/"
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

import React, { Component } from "react";
//
import CaseStudy from "./CaseStudy/CaseStudy.js";
import njImg from "../../assets/images/Projects/NJ.png";
import ppImg from "../../assets/images/Projects/PP.png";
import ncInsightsImg from "../../assets/images/Projects/NewscredInsights.png";
import ncImg from "../../assets/images/Projects/Newscred.png";
import tfrImg from "../../assets/images/Projects/TFR.png";
import amalgamImg from "../../assets/images/Projects/Amalgam.png";
import vitaImg from "../../assets/images/Projects/vita.png";
import insuramatchImg from "../../assets/images/Projects/Insuramatch.png";
import forayImg from "../../assets/images/Projects/Foray.png";
import emImg from "../../assets/images/Projects/ExtraMile.png";
import keleImg from "../../assets/images/Projects/Kele.png";
import bassettImg from "../../assets/images/Projects/Bassett.png";
import tbImg from "../../assets/images/Projects/TedBaker.png";
import saImg from "../../assets/images/Projects/SA.png";

const caseStudyList = {
  NewsCred: {
    url: "https://www.newscred.com/",
    image: ncImg,
  },
  "NewsCred Insights": {
    url: "https://insights.newscred.com/",
    image: ncInsightsImg,
  },
  "Norman and Jules": {
    url: "https://normanandjules.com/",
    image: njImg,
  },
  SmartAsset: {
    url: "https://smartasset.com/",
    image: saImg,
  },
  "Bassett Furniture": {
    url: "https://www.bassettfurniture.com/stores/",
    image: bassettImg,
  },
  "Ted Baker": {
    url: "https://www.tedbaker.com/stores/en_GB/",
    image: tbImg,
  },
  "The Free Ride": {
    url: "http://thefreeride.com/",
    image: tfrImg,
  },
  Amalgam: {
    url: "http://amalgam.co/",
    image: amalgamImg,
  },
  "Progressive Punctuation": {
    url: "http://progressivepunctuation.com/",
    image: ppImg,
  },
  "ViTA World": {
    url: "http://vita.world/",
    image: vitaImg,
  },
  InsuraMatch: {
    url: "https://www.insuramatch.com/",
    image: insuramatchImg,
  },
  "Extra Mile": {
    url: "https://extramile.thehartford.com/",
    image: emImg,
  },
  Kele: {
    url: "https://www.kele.com/",
    image: keleImg,
  },
  "Foray Collective": {
    url: "https://www.shopforay.com/",
    image: forayImg,
  },
};

class CaseStudies extends Component {
  render() {
    const caseTiles = Object.keys(caseStudyList).map((client) => {
      return (
        <CaseStudy
          client={client}
          link={caseStudyList[client].url}
          image={caseStudyList[client].image}
          key={client}
        />
      );
    });

    return (
      <section className="row case-studies" id="work">
        <h2 className="heading col-12">Featured Work</h2>
        {caseTiles}
      </section>
    );
  }
}

export default CaseStudies;

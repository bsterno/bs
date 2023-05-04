import React, { Component } from "react";
//
import CaseStudy from "./CaseStudy/CaseStudy.js";
import amalgamImg from "../../assets/images/Projects/Amalgam.png";
import bassettImg from "../../assets/images/Projects/Bassett.png";
import coaMarketing from "../../assets/images/Projects/CoaMarketing.png";
import coaMobileApp from "../../assets/images/Projects/CoaMobileApp.png";
import coaWebApp from "../../assets/images/Projects/CoaWebApp.png";
import emImg from "../../assets/images/Projects/ExtraMile.png";
import forayImg from "../../assets/images/Projects/Foray.png";
import insuramatchImg from "../../assets/images/Projects/Insuramatch.png";
import keleImg from "../../assets/images/Projects/Kele.png";
import ncImg from "../../assets/images/Projects/Newscred.png";
import ncInsightsImg from "../../assets/images/Projects/NewscredInsights.png";
import njImg from "../../assets/images/Projects/NJ.png";
import ppImg from "../../assets/images/Projects/PP.png";
import saImg from "../../assets/images/Projects/SA.png";
import smartAdvisor from "../../assets/images/Projects/SmartAdvisor.png";
import tbImg from "../../assets/images/Projects/TedBaker.png";
import tfrImg from "../../assets/images/Projects/TFR.png";
import vitaImg from "../../assets/images/Projects/vit.png";
import circuitMobileApp from "../../assets/images/Projects/CircuitMobileApp.png";

const caseStudyList = {
  "Coa - Web App": {
    url: "https://app.joincoa.com/",
    image: coaWebApp,
  },
  "Coa - Mobile App": {
    url: "https://apps.apple.com/us/app/coa-mental-health/id1644918032",
    image: coaMobileApp,
  },
  "Coa - Marketing Site": {
    url: "https://joincoa.com/",
    image: coaMarketing
  },
  "SmartAsset": {
    url: "https://smartasset.com/",
    image: saImg,
  },
  "SmartAdvisor": {
    url: "https://smartadvisormatch.com/",
    image: smartAdvisor,
  },
  "Norman and Jules": {
    url: "https://normanandjules.com/",
    image: njImg,
  },
  "Amalgam": {
    url: "http://amalgam.co/",
    image: amalgamImg,
  },
  "Progressive Punctuation": {
    url: "http://progressivepunctuation.com/",
    image: ppImg,
  },
  "NewsCred (Acquired by Optimizely)": {
    url: "https://www.newscred.com/",
    image: ncImg,
  },
  "NewsCred Insights Software (Acquired by Optimizely)": {
    url: "/oops",
    image: ncInsightsImg,
  },
  "Ride Circuit": {
    url: "https://www.ridecircuit.com/",
    image: tfrImg,
  },
  "Ride Circuit - Mobile App": {
    url: "https://apps.apple.com/us/app/id988052033",
    image:   circuitMobileApp
  },
  "ViTA World": {
    url: "http://vita.world/",
    image: vitaImg,
  },
  "InsuraMatch": {
    url: "https://www.insuramatch.com/",
    image: insuramatchImg,
  },
  "Extra Mile": {
    url: "https://extramile.thehartford.com/",
    image: emImg,
  },
  "Bassett Furniture": {
    url: "https://www.bassettfurniture.com/stores/",
    image: bassettImg,
  },
  "Ted Baker": {
    url: "https://www.tedbaker.com/stores/en_GB/",
    image: tbImg,
  },
  "Kele": {
    url: "https://www.kele.com/",
    image: keleImg,
  },
  "Foray Collective (No longer exists)": {
    url: "/oops",
    image: forayImg,
  },
};

class CaseStudies extends Component {
  render() {
    const caseTiles = Object.keys(caseStudyList).map((client) => (
        <CaseStudy
          client={client}
          link={caseStudyList[client].url}
          image={caseStudyList[client].image}
          key={client}
        />
      ));

    return (
      <section className="row case-studies" id="work">
        <h2 className="heading col-12">Featured Work</h2>
        {caseTiles}
      </section>
    );
  }
}

export default CaseStudies;
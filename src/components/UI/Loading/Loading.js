import React, { Component } from "react";
//
import reactIcon from "../../../assets/images/icons/react.png";
import loadingPikachu from "../../../assets/images/loading-icons/pikachu.gif";
import "./Loading.css";

const loadingIcons = [loadingPikachu];

class Loading extends Component {
  async detectIncognito() {
    if ("storage" in navigator && "estimate" in navigator.storage) {
      const { usage, quota } = await navigator.storage.estimate();
      console.log(`Using ${usage} out of ${quota} bytes.`);

      if (quota < 120000000) {
        // Incognito
        alert(
          "========INCOGNITO MODE DETECTED ========\n\n" +
            "initializing brightstar v1.00.1-170220...\n" +
            "--- 3 payloads 11 encodes...\n" +
            "--- executing passhack.exe...\n" +
            "--- 4 large eggs and 1.25 cup of milk...\n" +
            "--- pinch of salt...\n" +
            "--- 2 tsp of butter...\n\n" +
            "jk you're not being hacked, but you did find an easter egg!!! \n\n" +
            "now you know: it's possible to detect if your users are in incognito mode!"
        );
        window.localStorage.setItem("shownCreeperAlert", true);
      } else {
        // Not Incognito
      }
    } else {
      // Cannot detect
    }
  }

  componentWillUnmount() {
    if (!window.localStorage.getItem("shownCreeperAlert")) {
      this.detectIncognito();
    }
  }

  render() {
    return (
      <div className="load-screen">
        <div className="load-content">
          <img
            className="load-icon"
            alt="loading"
            src={loadingIcons[Math.floor(Math.random() * loadingIcons.length)]}
          />
          <div className="built-with col-12">
            <p>Built with React</p>
            <img src={reactIcon} alt="react" />
          </div>
        </div>
      </div>
    );
  }
}

export default Loading;

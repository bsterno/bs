import React, { Component } from 'react'
//
import reactIcon from '../../../assets/images/icons/react.png';
import loadingDuck from '../../../assets/images/loading-icons/duck.gif';
import loadingCat from '../../../assets/images/loading-icons/gangnam-cat.gif';
import loadingMario from '../../../assets/images/loading-icons/mario.gif';
import loadingDorito from '../../../assets/images/loading-icons/dorito.gif';
import loadingPikachu from '../../../assets/images/loading-icons/pikachu.gif';
import './Loading.css'

const loadingIcons = [
  loadingDuck,
  loadingCat,
  loadingMario,
  loadingDorito,
  loadingPikachu
];

const randomLoadingIcon = loadingIcons[Math.floor(Math.random()*loadingIcons.length)];

class Loading extends Component {
    async detectIncognito() {
        if ('storage' in navigator && 'estimate' in navigator.storage) {
            const {usage, quota} = await navigator.storage.estimate();
            console.log(`Using ${usage} out of ${quota} bytes.`);

            if(quota < 120000000){
                // Incognito
                alert("Creeping around in incognito mode huh? Don't worry, your secret is safe with me 😈");
                window.localStorage.setItem('shownCreeperAlert', true);
            } else {
                // Not Incognito
            }
        } else {
            // Cannot detect
        }
    }

    componentWillUnmount() {
        if (!window.localStorage.getItem('shownCreeperAlert')) {
          this.detectIncognito();
        }
    }

    render() {
        return (
            <div className="load-screen">
                <div className="load-content">
                    <img className="load-icon" src={randomLoadingIcon} />
                    <div className="built-with col-12">
                        <p>Built with React</p><img src={reactIcon} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Loading;

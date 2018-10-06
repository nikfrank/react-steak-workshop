import React, { Component } from "react";
import LazyHero from "react-lazy-hero";
import WoodenBottom from "./imgs/woodBottom.jpg";
import brass from "./imgs/brassFix.jpg";

import './Contact.css';
import Girls from "./imgs/girls.jpg";

class Contact2 extends Component {
  render() {
    return (
      <div>
        <LazyHero
          className="pageTopper"
          imageSrc={Girls}
          opacity={0.0}
          parallaxOffset={100}
          minHeight="25vw"
          transitionDuration={700}
        />

        <div style={{ backgroundColor: "#D9CAB3" }}>
          <div className="WoodenBottom-container">
            <img src={WoodenBottom} />
            <img src={brass} className="home-brass" />
          </div>

          <div className="spacer" />
        </div>
      </div>
    );
  }
}
export default Contact2;

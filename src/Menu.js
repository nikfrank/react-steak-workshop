import React, { Component } from "react";
import LazyHero from "react-lazy-hero";
import woodHeader from "./imgs/woodHeader.jpg";

import roast from "./imgs/roast.jpg";
import WoodenBottom from "./imgs/woodBottom.jpg";
import brass from "./imgs/brassFix.jpg";

const Roaster = require("./imgs/roast.jpg");

class Menu extends Component {
  render() {
    return (
      <div>
        <LazyHero
          className="pageTopper"
          imageSrc={Roaster}
          opacity={0.0}
          parallaxOffset={100}
          minHeight="25vw"
          transitionDuration={500}
        />

        <div className="WoodenBottom-container">
          <img src={WoodenBottom} />
          <img src={brass} className="home-brass" />
        </div>

        <section>
          <h1>The menu goes here</h1>
          <h3>Write soome other thing here about this thing.</h3>
        </section>
      </div>
    );
  }
}
export default Menu;

import React, { Component } from "react";
import LazyHero from "react-lazy-hero";
import WoodenBottom from "./imgs/woodBottom.jpg";
import brass from "./imgs/brassFix.jpg";
import asian from "./imgs/asianCheg.jpg";
import moFire from "./imgs/moFire.jpg";
import Amanda from "./imgs/amanda.jpg";
import Stacey from "./imgs/hostess.jpg";
import Sandler from "./imgs/sandlerFix.jpg";
import Bar from "./imgs/bar2.jpg";
import Smoove from "./imgs/Smoove2.jpg";
//import './About.css';
const Rib = require("./imgs/hawksmoor.png");

class About extends Component {
  render() {
    return (
      <div>
        <LazyHero
          className="pageTopper"
          imageSrc={Rib}
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

          <h1>Mulligans Steakhouse</h1>
          <ul className="grid">
            <li
              className="small"
              style={{ backgroundImage: `url(${asian})` }}
            />
            <li
              className="small"
              style={{ backgroundImage: `url(${moFire})` }}
            />
          </ul>
          <div className="Gallery-Blurb">
            <p>
              <br />
              Our staff is here to rock out in the kitchen, and make sure you
              get the service you want. We welcome you to come to the place
              where everybody knows your name. We cater to an exclusive crowd,
              and create an environment where every guest is a VIP at their home
              away from home. Mulligans Steakhouse is your favorite restaunteurs
              favorite restaurant, a place where chefs, celebs, world leaders,
              <br />and visionaries come to have a night in. Hand carved
              furniture, barrel aged whisky, woodfire ovens, and flame broiled
              steaks. <br /> <br />
              Are you ready to join the club? <br />
            </p>
          </div>
        </div>
        <div className="About-Staff-container">
          <br />
          <div className="Staff-Header">
            <h2>Our staff</h2>
          </div>

          <div className="Staff-Bios">
            <div className="Staff-Card">
              <div>
                <img src={Amanda} />
              </div>
              <div>
                <h2>Jamie Weinhouse</h2>
                <h3>Head Chef</h3>
                <p>
                  Jamie grew up working in her parents deli, and had mastered
                  the art of the craft cocktail long before she hit the drinking
                  age. She studied at Auguste Escoffier School of Culinary Arts,
                  and has worked in some of the most celebrated kitchens around
                  the globe. <br /> Shes on the all steak diet. <br /> <br />{" "}
                  Whats your excuse?
                </p>
              </div>
            </div>

            <div className="Staff-Card">
              <div>
                <img src={Stacey} />
              </div>
              <div>
                <h2>Stacey Smith</h2>
                <h3>Head Bartender</h3>
                <p>
                  Stacey loves steak, but she loves whiskey more. She learned
                  the art of distilling scotch during her travels in Japan
                  before shooting down to Kentucky to try her hand at bourbon.
                  Stacey worked at the renowned Clydes Commons bar in Portland
                  Oregon and serves up fresh cocktails that will leave you
                  asking "Where have you been all my life?" <br />
                  <br />Stacey chases her whiskey with high fives.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <LazyHero
            className="pageBottom"
            imageSrc={Bar}
            opacity={0.0}
            parallaxOffset={100}
            minHeight="45vw"
            transitionDuration={700}
          />
          <div className="WoodenBottom-container">
            <img src={WoodenBottom} />
            <img src={brass} className="home-brass" />
          </div>
          <div className="spacer" />
          <h3> Celebrity Endorsements</h3>
          <br /> <br />
          <p>
            We know we're the best in the biz. But why take our word for it?
          </p>
          <ul className="grid">
            <li
              className="small"
              style={{ backgroundImage: `url(${Sandler})` }}
            />
            <li
              className="small"
              style={{ backgroundImage: `url(${Smoove})` }}
            />
          </ul>
        </div>
      </div>
    );
  }
}
export default About;

import React, { Component } from "react";
import LazyHero from "react-lazy-hero";
import roast from "./imgs/roast.jpg";
import WoodenBottom from "./imgs/woodBottom.jpg";
import brass from "./imgs/brassFix.jpg";

const Roaster = require("./imgs/roast.jpg");
console.log(roast);
console.log(Roaster);

class Home extends Component {
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

        <h1>Mulligans Steakhouse</h1>

        <ul className="grid">
          <li className="small" style={{ backgroundImage: "url()" }} />
          <li className="small" style={{ backgroundImage: "url()" }} />
          <li className="small" style={{ backgroundImage: "url()" }} />
          <li className="small" style={{ backgroundImage: "url()" }} />
        </ul>

        <section className="contact">
          <h3 className="title">Mulligans</h3>
          <p>
            כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר ועיר
            וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
          </p>
          <br />

          <form>
            <input type="email" placeholder="Email" />
            <a href="#" className="btn">
              Subscribe now
            </a>
          </form>
        </section>
      </div>
    );
  }
}
export default Home;

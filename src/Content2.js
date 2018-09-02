import React, { Component } from "react";
class Content2 extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div
            className="background-image"
            style={{ backgroundImage: "url()" }}
          />
          <h1>This is a blank content page component</h1>
          <h3>Write soome other thing here about this thing.</h3>
        </section>
        <section className="features">
          <h3 className="title">Some recent work</h3>
          <p>
            כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר ועיר
            וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
          </p>
          <br />
          <h1> This is a blank content view component</h1>
          <br />
        </section>
      </div>
    );
  }
}
export default Content2;

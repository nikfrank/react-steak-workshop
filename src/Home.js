import React, { Component } from "react";
class Home extends Component {
  render() {
    return (
      <div>
        <section className="hero">
          <div
            className="background-image"
            style={{ backgroundImage: "url()" }}
          />
          <h1>Blank Homepage Component</h1>
          <h3>Write soome other thing here about this thing.</h3>
          <a href="..." className="btn">
            Download it Here
          </a>
        </section>

        <section className="our-work">
          <h3 className="title">Some recent work</h3>
          <p>
            כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר ועיר
            וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
          </p>
          <br />

          <ul className="grid">
            <li className="small" style={{ backgroundImage: "url()" }} />
            <li className="large" style={{ backgroundImage: "url()" }} />
            <li className="large" style={{ backgroundImage: "url()" }} />
            <li className="small" style={{ backgroundImage: "url()" }} />
          </ul>
        </section>

        <section className="features">
          <h3 className="title">Features and services</h3>
          <p>
            כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר ועיר
            וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
          </p>
          <br />

          <ul className="grid">
            <li>
              <i className="fa fa-camera-retro" />
              <h4>Photography</h4>
              <p>
                כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר
                ועיר וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
              </p>
            </li>
            <li>
              <i className="fa fa-cubes" />
              <h4>Web Development</h4>
              <p>
                כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר
                ועיר וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
              </p>
            </li>
            <li>
              <i className="fa fa-newspaper-o" />
              <h4>Content Editing</h4>
              <p>
                כל הדברים שבגמרא הבבלי חייבין כל ישראל ללכת בהם וכופין כל עיר
                ועיר וכל מדינה ומדינה לנהוג בכל המנהגות שנהגו חכמי הגמרא
              </p>
            </li>
          </ul>
        </section>

        <section className="reviews">
          <h3 className="title">What others say:</h3>

          <p className="quote">
            Have you ever noticed that anybody driving slower than you is an
            idiot, and anyone going faster than you is a maniac?
          </p>
          <p className="author">— George Carlin</p>

          <p className="quote">
            'Cause I'm leavin' on a jet plane Don't know when I'll be back again
            Oh babe, I hate to go
          </p>
          <p className="author">— John Denver</p>

          <p className="quote">
            I'm not so mean. I wouldn't ever set out to hurt anyone deliberately
            unless it was, you know, important - like a league game or
            something.{" "}
          </p>
          <p className="author">— Dick Butkiss</p>
        </section>

        <section className="contact">
          <h3 className="title">Join our newsletter</h3>
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

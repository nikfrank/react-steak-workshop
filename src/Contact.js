import React, { Component } from "react";
import "./ContactForm.css";
import Textarea from "./Textarea";
import Correct from "./imgs/correct.svg";
import X from "./imgs/delete-button.svg";
import contactWood from "./imgs/woodFloor3.jpg";

import LazyHero from "react-lazy-hero";
import WoodenBottom from "./imgs/woodBottom.jpg";
import brass from "./imgs/brassFix.jpg";

import Girls from "./imgs/girls.jpg";
import map from "./imgs/map.png";
class Contact extends Component {
  state = {
    userName: "",
    email: "",
    message: "",
    submit: false
  };

  setUserName = event => this.setState({ userName: event.target.value });

  setEmail = ({ target: { value } }) =>
    this.setState({
      email: value,
      isEmailValid: value.includes("@" && ".")
    });

  setMessage = event => this.setState({ message: event.target.value });
  setSubmit = event => this.setState({ submit: event.target.value });

  render() {
    const { userName, email, message } = this.state;

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
            <img alt="" src={WoodenBottom} />
            <img alt="" src={brass} className="home-brass" />
          </div>

          <div className="spacer" />

          <section className="contact-section-tag">
            <div className="page contact-container">
              <div
                className="form-container"
                style={{ backgroundImage: `url(${contactWood})` }}
              >
                <h1 className="form-header">Send us your message</h1>

                <div className="emailInvalid" />

                <form id="form" class="topBefore">
                  <input
                    id="name"
                    type="text"
                    placeholder="NAME"
                    onChange={this.setUserName}
                    value={userName}
                  />

                  <div className="contact-email-div">
                    <input
                      id="email"
                      type="text"
                      placeholder="E-MAIL"
                      onChange={this.setEmail}
                      value={email}
                    />
                    {!!this.state.email.length ? (
                      !!this.state.isEmailValid ? (
                        <img alt="" src={Correct} />
                      ) : (
                        <img alt="" src={X} />
                      )
                    ) : null}
                  </div>

                  <div className="contact-message-div">
                    <Textarea
                      id="message"
                      type="text"
                      onChange={this.setMessage}
                      value={message}
                    />
                  </div>
                  <input
                    id="submit"
                    type="submit"
                    value="SUBMIT"
                    onChange={this.setSubmit}
                  />
                </form>
              </div>
            </div>
          </section>
          <div className="more-info-container">
            <div className="location">
              <h2>Contact</h2>
              <br />
              <p>20 Exodus Street, Netanya </p>
              <br />
              <a href="mailto:MulligansSteakhouse@nycmail.com">
                {" "}
                <p>MulligansSteakhouse@nycmail.com </p>
              </a>
            </div>
            <div className="map">
              <img src={map} />
            </div>
            <div className="parking">
              <h3>Parking</h3>
              <br />
              <p>
                <strong>Street Parking</strong> is available in a parking lot
                next door.{" "}
              </p>
              <br />
              <p>
                {" "}
                <strong> Valet parking </strong> is available on site for 20nis
                per car with restaurant validation.
              </p>{" "}
              <br />
              <p> We promise not to go Bueller with your Ferrari.</p>
            </div>
            <div className="policy">
              <h3>Reservation Policies</h3>
              <br />
              <p>Reservations will be held for 15 minutes.</p>
              <br />
              <p>
                After 15 minutes we will do our best to accommodate you, but
                will not be able to guarantee a table.
              </p>
              <br />
              <p>
                We accept online and phone reservations. If the reservation time
                you are looking for is not available, please feel free to join
                us at bar. We keep the bar available for walk-ins and it is
                first come first serve.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contact;

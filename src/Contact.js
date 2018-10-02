import React, { Component } from "react";
import './ContactForm.css';
import Textarea from './Textarea';
import Correct from './imgs/correct.svg';
import X from './imgs/delete-button.svg';
import contactWood from './imgs/woodFloor3.jpg'

import LazyHero from "react-lazy-hero";
import WoodenBottom from "./imgs/woodBottom.jpg";
import brass from "./imgs/brassFix.jpg";

import Girls from "./imgs/girls.jpg";

class Contact extends Component {

  state = { userName: '',
            email: '',
            message: '',
            submit: false,
  }

  setUserName = event => this.setState({ userName: event.target.value })
  
  setEmail = ({ target: { value } }) =>
    this.setState({
      email: value,
      isEmailValid: value.includes('@' && '.' )
    })
  
  setMessage = (event)=> this.setState({ message: event.target.value  });
  setSubmit = (event)=> this.setState({ submit: event.target.value  });

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
            <img alt='' src={WoodenBottom} />
            <img alt='' src={brass} className="home-brass" />
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
                        <img alt='' src={Correct} />
                      ) : (
                        <img alt='' src={X} />
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
        </div>
      </div>
    );
  }
}
export default Contact;

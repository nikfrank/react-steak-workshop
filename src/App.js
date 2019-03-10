import React, { Component } from "react";

import "./App.scss";
import "./Global.scss";

import "./mobilenav.scss";
import "./rc-swipeout.scss";

import {
  Route,
  NavLink,
  BrowserRouter as Router,
  Switch,
  Redirect
} from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Menu from "./Menu";
import Contact from "./Contact";

import Swipeout from "rc-swipeout";

import { HamburgerArrow } from "react-animated-burgers";

import woodHeader from "./imgs/woodHeader.jpg";
import homelogo from "./imgs/homelogo.png";

import insta from "./imgs/insta.svg";
import facebook from "./imgs/facebook.svg";

//import { Logo } from 'capsloklogo';
//import cursiveLogo from 'capsloklogo/dist/CapsSquare-cursive.svg';
import { Cursive } from 'capsloklogo';

class App extends Component {
  state = {
    sideMenuVisible: false
  };

  setMobileMenu = () =>
    this.setState({ sideMenuVisible: !this.state.sideMenuVisible });


  
  render() {

    return (
      <Router>
        <div className="App">
          <div className="navWrapper navMobile">
            <header>
              <div className="header-mobile-container">
                <h2 className="homelogo-text">
                  <NavLink to="/home">Mulligans</NavLink>
                </h2>

                <div
                  className="hamburger-button-wrapper"
                  onClick={this.setMobileMenu}
                >
                  <HamburgerArrow
                    isActive={this.state.sideMenuVisible}
                    toggleButton={this.setMobileMenu}
                    barColor="white"
                  />
                </div>

                <div
                  className={
                    "side-nav " +
                      (this.state.sideMenuVisible
                     ? "side-nav-does-show"
                     : "side-nav-does-not-show")
                  }
                >
                  <ul>
                    <li>
                      <NavLink to="/home">
                        <div>Home</div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/about">
                        <div>About</div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/menu">
                        <div>Menu</div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/contact">
                        <div>Contact</div>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink to="/home">
                        <img alt='' src={homelogo} />
                      </NavLink>
                    </li>
                  </ul>
                  <Swipeout
                    left={[
                      {
                        text: "reply",
                        onPress: this.setMobileMenu,
                        style: { backgroundColor: "orange", color: "white" },
                        className: "custom-class-1"
                      }
                    ]}
                    onOpen={this.setMobileMenu}
                  >
                    <div
                      className="side-nav-shade"
                      onClick={this.setMobileMenu}
                    />
                  </Swipeout>
                </div>
              </div>

              <div className="nav-regular">
                <nav>
                  <li>
                    <NavLink to="/home">Home</NavLink>
                  </li>
                  <li>
                    <NavLink to="/about">About</NavLink>
                  </li>
                  <li>
                    <NavLink to="/menu">Menu</NavLink>
                  </li>
                  <li>
                    <NavLink to="/contact">Contact</NavLink>
                  </li>
                </nav>
              </div>
            </header>
          </div>

          <div className="header-background">
            <img alt='' src={woodHeader} />
          </div>

          <div>
            <Switch>
              <Route exact path="/home" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/menu" component={Menu} />

              <Route exact path="/contact" component={Contact} />
              <Redirect from="/" to="/home" />
            </Switch>
          </div>

          <footer>
            <ul>
              <li className='app-footer-media-tags'>
                <a href="/">
                  <img alt='' src={insta} className="social-square insta" />
                </a>
              </li>
              <li>
                <a href="/">
                  <img alt='' src={facebook} className="social-square face" />
                </a>
              </li>
            </ul>

            <div className='made-by'>
              <div>
                Made by
                <div>
                  <Cursive className='foot-logo'
                           style={{
                             color: 'purple',
                             backgroundFill: 'cyan',
                           }}/>
                </div>
              </div>
              <p>Watch us ball out on these mofos</p>
            </div>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;

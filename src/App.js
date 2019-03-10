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
    const { sideMenuVisible } = this.state;

    return (
      <Router>
        <div className="App">
          <div className="navWrapper navMobile">
            <NavBar onToggle={this.setMobileMenu} open={sideMenuVisible}/>
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

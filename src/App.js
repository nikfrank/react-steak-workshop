import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
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
import woodHeader from "./imgs/woodHeader.jpg";
import menuLogo from './imgs/menu.svg';
import { HamburgerArrow } from 'react-animated-burgers';
import homelogo from './imgs/homelogo.png';


class App extends Component {

  

  state = {
    sideMenuVisible: false,
  }
  

  setMobileMenu = () => this.setState({sideMenuVisible: !this.state.sideMenuVisible})
  
  render() {
    console.log(this.state)
    return (
      <Router>
        <div className="App">
          <div className="navWrapper navMobile">
            <header>
              <div className='header-mobile-container'>
                <h2>
                  <NavLink to="/home"><img src={homelogo}/></NavLink>
                </h2>
                <div className='hamburger-button-wrapper'
                     onClick={this.setMobileMenu}>
                  <HamburgerArrow
                    isActive={this.state.sideMenuVisible}
                    toggleButton={this.setMobileMenu}
                    barColor="white"/>
                </div>

                <div className={'side-nav ' + (this.state.sideMenuVisible ? "side-nav-does-show" : "side-nav-does-not-show")}>
                  <ul>
                    <li>
                      <NavLink to="/home"><div>Home</div></NavLink>
                    </li>
                    <li>
                      <NavLink to="/about"><div>About</div></NavLink>
                    </li>
                    <li>
                      <NavLink to="/menu"><div>Menu</div></NavLink>
                    </li>                  
                    <li>
                      <NavLink to="/contact"><div>Contact</div></NavLink>
                    </li>
                    <li>
                      <NavLink to="/home"><img src={homelogo}/></NavLink>
                    </li>
                  </ul>
                  <div className='side-nav-shade' onClick={this.setMobileMenu}/>
                </div>
              </div>

              <div className='nav-regular'>
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
            <img src={woodHeader} />
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
              <li>
                <a href="#">
                  <i className="fa fa-twitter-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-facebook-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-snapchat-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-pinterest-square" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa fa-github-square" />
                </a>
              </li>
            </ul>
            <p>
              Made by{" "}
              <a href="..." target="_blank">
                CapsLok
              </a>.{" "}
            </p>
            <p>Watch us ball out on these mofos</p>
          </footer>
        </div>
      </Router>
    );
  }
}

export default App;

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
                      <NavLink to="/home">Website Logo</NavLink>
                    </h2>       
                    <img src={menuLogo}
                         className='mobile-menu-icon'
                         onClick={this.setMobileMenu}/>
                    <div className={'side-nav ' + (this.state.sideMenuVisible ? "side-nav-does-show" : "side-nav-does-not-show")}>
                        <div>
                          <NavLink to="/home">Home</NavLink>
                        </div>
                        <div>
                          <NavLink to="/about">About</NavLink>
                        </div>
                        <div>
                          <NavLink to="/menu">Menu</NavLink>
                        </div>                  
                        <div>
                          <NavLink to="/contact">Contact</NavLink>
                        </div>
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

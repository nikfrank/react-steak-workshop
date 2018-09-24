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

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <div className="navWrapper">
            <header>
              <h2>
                <NavLink to="/home">Website Logo</NavLink>
              </h2>
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

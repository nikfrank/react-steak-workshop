import React, { Component } from "react";

import Swipeout from "rc-swipeout";

import { HamburgerArrow } from "react-animated-burgers";

import woodHeader from "./imgs/woodHeader.jpg";
import homelogo from "./imgs/homelogo.png";


export default ({ onToggle = (()=>0), open=false })=>(
  <header>
    <div className="header-mobile-container">
      <h2 className="homelogo-text"><NavLink to="/home">Mulligans</NavLink></h2>

      <div className="hamburger-button-wrapper" onClick={this.setMobileMenu}>
        <HamburgerArrow
          isActive={sideMenuVisible}
          toggleButton={onToggle}
          barColor="white"
        />
      </div>

      <div className={"side-nav " + (sideMenuVisible ? "side-nav-does-show" : "side-nav-does-not-show")}>
        <ul>
          <li><NavLink to="/home"><div>Home</div></NavLink></li>
          <li><NavLink to="/about"><div>About</div></NavLink></li>
          <li><NavLink to="/menu"><div>Menu</div></NavLink></li>
          <li><NavLink to="/contact"><div>Contact</div></NavLink></li>
          <li><NavLink to="/home"><img alt='' src={homelogo} /></NavLink></li>
        </ul>
        <Swipeout
          left={[{
            text: "reply",
            onPress: onToggle,
            style: { backgroundColor: "orange", color: "white" },
          }]}
          onOpen={onToggle}>
          
          <div className="side-nav-shade" onClick={onToggle} />
        </Swipeout>
      </div>
    </div>

    <div className="nav-regular">
      <nav>
        <li><NavLink to="/home">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/menu">Menu</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </nav>
    </div>
  </header>
);

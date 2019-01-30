import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
        <header className="header">
          <Link to="/">
            <img src="./src/assets/img/logo.png" alt="Logo"/>
          </Link>
          <h1>Weather</h1>
        </header>
    );
  }
}
export default Header;
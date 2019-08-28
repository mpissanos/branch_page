import React, { Component } from "react";
import Menu from "./Menu";
import RatingStars from "./RatingStars";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <Menu />
        <div className="header-logo">
          <img src="./logo-brand.png" alt="All My Sons Logo"></img>
        </div>
        <RatingStars />
      </div>
    );
  }
}

export default Header;

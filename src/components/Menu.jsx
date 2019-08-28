/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Menu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggleMenu = () => {
    this.setState(state => ({
      isOpen: !state.isOpen
    }));
    document.addEventListener("click", this.handleClose, false);
  };

  handleClose = () => {
    this.setState({
      isOpen: false
    });
    document.removeEventListener("click", this.handleClose, false);
  };

  render() {
    return (
      <div className="menu-wrapper">
        <button
          className="menu-button"
          href="#"
          onMouseEnter={this.toggleMenu}
          onClick={this.toggleMenu}
        >
          <div></div>
          <div></div>
          <div></div>
        </button>
        <nav className={this.state.isOpen ? "is-open" : ""} id="menu">
          <div className="menu-top">
            <h3 className="inner-menu-title">Menu</h3>
            <a
              className="menu-button menu-close-button"
              id="menu-button"
              href="#"
            >
              <div className="button-div-1"></div>
              <div className="button-div-2"></div>
            </a>
          </div>
          <ul className="menu-items">
            <li>
              <a href="#">Our Story</a>
            </li>
            <li>
              <a href="#">Happy Customers</a>
            </li>
            <li>
              <a href="#">Our Services</a>
            </li>
            <ul>
              <li>
                <a href="#">Local Moving</a>
              </li>
              <li>
                <a href="#">Long-Distance Moving</a>
              </li>
              <li>
                <a href="#">Corporate Relocation</a>
              </li>
              <li>
                <a href="#">Commercial Moving</a>
              </li>
              <li>
                <a href="#">Storage Facilities</a>
              </li>
              <li>
                <a href="#">Packing Services</a>
              </li>
              <li>
                <a href="#">Packing Supplies</a>
              </li>
            </ul>
            <li>
              <a href="#">Help & Feedback</a>
            </li>
            <li>
              <a href="#">Official Movers of..</a>
            </li>
            <li>
              <a href="#">Charity Partners</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
            <li>
              <a href="#">Business Development info</a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;

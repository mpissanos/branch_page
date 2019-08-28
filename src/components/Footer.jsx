/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from "react";

class Footer extends Component {
  render() {
    return (
      <footer className="footer">
        <div className="footer-contact">
          <h5>TALK WITH US</h5>
          <div className="line"></div>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Careers</a>
            </li>
          </ul>
        </div>
        <div className="footer-info">
          <h5>MOVING WITH US</h5>
          <div className="line"></div>
          <ul>
            <li>
              <a href="#">Moving Services</a>
            </li>
            <li>
              <a href="#">Find Storage</a>
            </li>
            <li>
              <a href="#">Moving Blog</a>
            </li>
            <li>
              <a href="#">Moving Checklist</a>
            </li>
          </ul>
        </div>
        <div className="footer-social">
          <h5>CONNECT WITH US</h5>
          <div className="line"></div>
          <ul className="social-icons">
            <li>
              <i>Facebook</i>
            </li>
            <li>
              <i>Google Plus</i>
            </li>
            <li>
              <i>Twitter</i>
            </li>
            <li>
              <i>Pinterest</i>
            </li>
            <li>
              <i>Youtube</i>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;

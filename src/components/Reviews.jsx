import React, { Component } from "react";

class Reviews extends Component {
  render() {
    return (
      <div className="reviews-box">
        <h3>REVIEWS</h3>
        <div className="line"></div>
        <div className="reviews">
          <ul>
            <li className="review">This is a review, fill in with props...</li>
            <li className="review">This is a review, fill in with props...</li>
            <li className="review">This is a review, fill in with props...</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Reviews;

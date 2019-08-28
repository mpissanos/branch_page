import React, { Component } from "react";

class QuoteForm extends Component {
  render() {
    return (
      <div className="quote-form-wrapper">
        <form>
          <div className="quote-form-title">
            <h3>GET A QUICK QUOTE!</h3>
          </div>
          <div className="quote-form-inputs">
            <label htmlFor="name">NAME:</label>
            <input type="tel" name="name" id="name" />
            <label htmlFor="tel">PHONE:</label>
            <input type="text" name="phone" id="phone" />
            <label htmlFor="email">EMAIL:</label>
            <input type="email" name="email" id="email" />
            <input
              className="submit"
              type="submit"
              name="submit"
              value="Submit"
              id="submit"
            />
          </div>
        </form>
      </div>
    );
  }
}

export default QuoteForm;

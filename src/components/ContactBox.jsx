import React, { Component } from 'react'

class ContactBox extends Component {
    render() {
        return (
            <div className="contact-box">
                    <div className="conatact-fields">
                    <div className="contact-box-adress">3761 Park Central Blvd N, Pompano Beach, Fl 33064</div>
                    <div className="contact-box-phone">954-637-7706</div>
                    <div className="contact-box-hours">OPEN TODAY! 9:00am - 5:00pm</div>
                    <button className="btn call-btn">CALL NOW: 954-234-5824</button>
                    <button className="btn get-quote-btn">GET YOUR FREE QUOTE</button>
                </div>
            </div>
        )
    }
}

export default ContactBox;
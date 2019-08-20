import React, { Component } from 'react'

class ServicesBox extends Component {
    render() {
        return (
            <div className="services-box">
                <h3 className="services-title">SERVICES</h3>
                <div className="line"></div>
                <div className="services-cards-container__grid">
                    <div className="service-card">
                        <i src="font awesome or whatever source for icons"></i>
                        <h4>LOCAL MOVING</h4>
                        <button>Learn More ></button>
                    </div>

                    <div className="service-card">
                        <i src="font awesome or whatever source for icons"></i>
                        <h4>CORPORATE MOVING</h4>
                        <button>Learn More ></button>
                    </div>

                    <div className="service-card">
                        <i src="font awesome or whatever source for icons"></i>
                        <h4>LONG-DISTANCE</h4>
                        <button>Learn More ></button>
                    </div>

                    <div className="service-card">
                        <i src="font awesome or whatever source for icons"></i>
                        <h4>PACKING SUPPLIES</h4>
                        <button>Learn More ></button>
                    </div>
                    
                </div>
            </div>
        )
    }
}

export default ServicesBox;
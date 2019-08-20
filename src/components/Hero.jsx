import React, { Component } from 'react'
import ContactBox from './ContactBox'

class Hero extends Component {
    
    render() {
        return (
            <div className="hero-wrapper">
                <div className="hero">
                    <div className="hero-image">
                        <img src="hero-image.jpg" alt="All My Sons"/>
                    </div>
                    <ContactBox />
                </div>
            </div>
        );
    }
}

export default Hero


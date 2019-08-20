import React, { Component } from 'react'
import MobileMenu from './MobileMenu'
import RatingStars from './RatingStars'

class Header extends Component {
    
    render() {
        return (
           <div className="header">
                 <MobileMenu />
                <div className="header-logo"><img src="./logo-brand.png" alt="All My Sons Logo"></img></div>
                <RatingStars />
            </div>
        );
    }
}

export default Header;
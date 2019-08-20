import React, { Component } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import Body from './components/Body'
import Footer from './components/Footer'
import './branch_page.css'


class BranchPage extends Component {
    render() {
        return (
            <div className="wrapper">
                <Header />
                <Hero />
                <Body />
                <Footer />
            </div>
            
        );
    }
}

export default BranchPage;
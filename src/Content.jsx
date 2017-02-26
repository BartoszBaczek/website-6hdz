import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AboutUs from './AboutUsComponent/AboutUs.jsx';
import Contact from './ContactComponent/Contact.jsx';
import Footer from './FooterComponent/Footer.jsx';
import Header from './HeaderComponent/Header.jsx';
import './Content.css';

class Content extends Component {
    render() {
        return(
            <div>
                <Element name="section-1" className="header-page background-red">
                    <Header />
                </Element>
                <Element name="section-2" className="element background-green">
                    Aktualności
                </Element>
                <Element name="section-3" className="about-us-page background-gray">
                    <h1 className="about-us-header">Nasz kadra</h1>
                    <AboutUs />
                </Element>
                <Element name="section-6" className="element">
                    Nasi partnerzy
                </Element>
                <Element name="section-7" className="contact-page background-gray">
                    <h1 className="contact-header">Kontakt</h1>
                    <Contact />
                </Element>
                <Footer />
            </div>
        );
    }
}

export default Content;
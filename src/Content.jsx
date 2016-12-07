import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AboutUs from './AboutUsComponent/AboutUs.jsx';
import Contact from './ContactComponent/Contact.jsx';
import './Content.css';

class Content extends Component {
    render() {
        return(
            <div>
                <Element name="section-1" className="element background-red">
                    Starting page
                </Element>
                <Element name="section-2" className="element background-green">
                    Aktualności
                </Element>
                <Element name="section-3" className="about-us-page">
                    <h1 className="about-us-header">Nasz kadra</h1>
                    <AboutUs />
                </Element>
                <Element name="section-4" className="element background-blue">
                    Media
                </Element>
                <Element name="section-5" className="element background-yellow">
                    Lokalizacja
                </Element>
                <Element name="section-6" className="element background-gray">
                    Nasi partnerzy
                </Element>
                <Element name="section-7" className="contact-page">
                    <h1 className="contact-header">Kontakt</h1>
                    <Contact />
                </Element>
            </div>
        );
    }
}

export default Content;
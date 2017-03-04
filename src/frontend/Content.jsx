import React, { Component } from 'react';
import { Element } from 'react-scroll';
import AboutUs from './pages/aboutUs/AboutUs';
import Contact from './pages/contact/Contact';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import './Content.css';

class Content extends Component {
    render() {
        return(
            <div className="content">
                <Header />
                <Element name="news" className="page-block">
                    Aktualności
                </Element>
                <Element name="aboutUs" className="page-block">
                    <h1 className="about-us-header">Nasz kadra</h1>
                    <AboutUs />
                </Element>
                <Element name="partners" className="page-block">
                    Nasi partnerzy
                </Element>
                <Element name="contact" className="page-block">
                    <h1 className="contact-header">Kontakt</h1>
                    <Contact />
                </Element>
                <Footer />
            </div>
        );
    }
}

export default Content;
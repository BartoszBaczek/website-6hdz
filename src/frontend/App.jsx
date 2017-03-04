import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import { Link, Events, animateScroll, Element } from 'react-scroll';
import AboutUs from './pages/aboutUs/AboutUs';
import Contact from './pages/contact/Contact';
import Footer from './pages/footer/Footer';
import Header from './pages/header/Header';
import './App.css';

import aboutUsService from './services/aboutUsService';

class App extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin');
    Events.scrollEvent.register('end');
  }

  scrollToTop() {
    animateScroll.scrollToTop({smooth: true, duration: 500});
  }
  render() {
    return (
        <div className="color-schema">
          <Navbar inverse fixedTop={true}>
                 <Navbar.Header>
                    <img className="home-logo" alt="Brand" src="./../favicon.ico" onClick={this.scrollToTop}></img>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem><Link to="news" smooth={true} duration={500}>Aktualności</Link></NavItem>
                        <NavItem><Link to="aboutUs" smooth={true} duration={500}>O nas</Link></NavItem>
                        <NavItem><Link to="partners" smooth={true} duration={500}>Nasi partnerzy</Link></NavItem>
                        <NavItem><Link to="contact" smooth={true} duration={500}>Kontakt</Link></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
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
        </div>
    );
  }
}

export default App;

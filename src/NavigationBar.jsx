import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './NavigationBar.css';
import { Link, Events, animateScroll } from 'react-scroll';

class NavigationBar extends Component {
    componentDidMount() {
        Events.scrollEvent.register('begin');
        Events.scrollEvent.register('end');
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    scrollToTop() {
        animateScroll.scrollToTop({smooth: true, duration:500});
    }

    render() {
        return (
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
        );
    }
}

export default NavigationBar;
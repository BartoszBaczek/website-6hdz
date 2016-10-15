import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './NavigationBar.css';
import { Link, Events, scrollSpy } from 'react-scroll';

class NavigationBar extends Component {
    componentDidMount() {

        Events.scrollEvent.register('begin', () => {
            console.log('scrollStarted', arguments);
        });

        Events.scrollEvent.register('end', () => {
            console.log('scrollFinished', arguments);
        });

        scrollSpy.update();

        console.log(scrollSpy);
    }

    componentWillUnmount() {
        Events.scrollEvent.remove('begin');
        Events.scrollEvent.remove('end');
    }

    render() {
        return (
             <Navbar inverse className="navbar" fixedTop={true}>
                 <Navbar.Header>
                     <Navbar.Brand>
                        <img className="colors-inverted" alt="Brand" src="./../favicon.ico"></img>
                     </Navbar.Brand>
                     <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem><Link activeClass="active" to="section-1" spy={true} smooth={true} duration={500}>Aktualności</Link></NavItem>
                        <NavItem><Link activeClass="active" to="section-2" spy={true} smooth={true} duration={500}>O nas</Link></NavItem>
                        <NavItem><Link activeClass="active" to="section-3" spy={true} smooth={true} duration={500}>Media</Link></NavItem>
                        <NavItem><Link activeClass="active" to="section-4" spy={true} smooth={true} duration={500}>Lokalizacja</Link></NavItem>
                        <NavItem><Link activeClass="active" to="section-5" spy={true} smooth={true} duration={500}>Nasi partnerzy</Link></NavItem>
                        <NavItem><Link activeClass="active" to="section-6" spy={true} smooth={true} duration={500}>Kontakt</Link></NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;
import React, { Component } from 'react';
import { Navbar, NavItem, Nav } from 'react-bootstrap';
import './NavigationBar.css';

class NavigationBar extends Component {
    render() {
        return (
             <Navbar inverse>
                 <Navbar.Header>
                     <Navbar.Brand>
                        <img className="colors-inverted" alt="Brand" src="./../favicon.ico"></img>
                     </Navbar.Brand>
                     <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="#">Aktualności</NavItem>
                        <NavItem eventKey={2} href="#">O nas</NavItem>
                        <NavItem eventKey={3} href="#">Media</NavItem>
                        <NavItem eventKey={5} href="#">Lokalizacja</NavItem>
                        <NavItem eventKey={6} href="#">Nasi partnerzy</NavItem>
                        <NavItem eventKey={7} href="#">Kontakt</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default NavigationBar;
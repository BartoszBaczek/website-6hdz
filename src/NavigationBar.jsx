import React, { Component } from 'react';
import { Nav, NavItem } from 'react-bootstrap';

class NavigationBar extends Component {
    render() {
        return (
             <Nav bsStyle="pills">
                 <NavItem>Lorem</NavItem>
                 <NavItem>Ipsum</NavItem>
                 <NavItem>Domanum</NavItem>
            </Nav>
        );
    }
}

export default NavigationBar;
import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        let footerText = "\u00A9 2016 - " + new Date().getFullYear() + " bartosz.baczek@gmail.com";

        return(
            <div className="footer">{footerText}</div>
        );
    }
}

export default Footer;




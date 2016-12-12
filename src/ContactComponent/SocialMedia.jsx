import React, { Component } from 'react';
import './SocialMedia.css';
import { Image } from 'react-bootstrap';
var socialMediaData = require("../../data/socialMedia.json");
import { Col, Row } from 'react-bootstrap';

class SocialMedia extends Component {
    render() {
        return (
            <Row className="margin-top-2">
                <Col md={11} mdOffset={1}>
                    <p><i className="fa fa-map-marker" aria-hidden="true"></i>&nbsp; Stanica Wodna 6HDŻ, Rudzka, 44-200 Rybnik</p>
                    <p><i className="fa fa-phone" aria-hidden="true"></i>&nbsp; 604-293-288</p>
                    <p><i className="fa fa-envelope" aria-hidden="true"></i>&nbsp; 6hdz.zhprybnik@gmail.com</p>
                </Col>
            </Row>
        );
    }
}

export default SocialMedia;
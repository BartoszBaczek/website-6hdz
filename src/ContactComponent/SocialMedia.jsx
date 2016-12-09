import React, { Component } from 'react';
import './SocialMedia.css';
import { Image } from 'react-bootstrap';
var socialMediaData = require("../../data/socialMedia.json");
import { Col, Row } from 'react-bootstrap';

class SocialMedia extends Component {
    render() {
        return (
            <Row className="margin-top-2">
                <Row>
                    <Col md={6}>
                        <Image src={process.env.PUBLIC_URL + socialMediaData.socialMedia[0].logo} responsive/>
                    </Col>
                    <Col md={6}>
                        <Image src={process.env.PUBLIC_URL + socialMediaData.socialMedia[1].logo} responsive/>
                    </Col>
                </Row>
                <Row>
                    <Col md={6}>
                        <Image src={process.env.PUBLIC_URL + socialMediaData.socialMedia[2].logo} responsive/>
                    </Col>
                    <Col md={6}>
                        <Image src={process.env.PUBLIC_URL + socialMediaData.socialMedia[3].logo} responsive/>
                    </Col>
                </Row>
            </Row>

        );
    }
}

export default SocialMedia;
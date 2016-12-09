import React, { Component } from 'react';
import './SocialMedia.css';
import { Image } from 'react-bootstrap';
var socialMediaData = require("../../data/socialMedia.json");

class SocialMedia extends Component {
    render() {
        return (
            <Image src={process.env.PUBLIC_URL + socialMediaData.socialMedia[0].logo} responsive/>
        );
    }
}

export default SocialMedia;
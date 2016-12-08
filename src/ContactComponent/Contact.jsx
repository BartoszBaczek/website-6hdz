import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import './Contact.css';
import Message from './Message';
import { Col } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <div>
                <Col className="map">
                    <GoogleMap
                        defaultCenter={{lat: 50.1259985, lng: 18.50548}}
                        defaultZoom={16}
                        bootstrapURLKeys={{key: "AIzaSyCxCOKEipbYo0RgQtVaPD_IkTuzfG7dovI"}}>
                    </GoogleMap>
                </Col>
                <Col md={8} mdOffset={4}>
                    <Message />
                </Col>

            </div>

        );
    }
}

export default Contact;
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import { Gmaps, Marker, InfoWindow, Circle } from 'react-gmaps';
import Message from './Message';
import SocialMedia from './SocialMedia';
import './Contact.css';

const coords = {
    lat: 50.1259592,
    lng: 18.5053484
}

class Contact extends Component {
    render() {
        return (
            <div>
                <Gmaps
                    height={'350px'}
                    lat={coords.lat}
                    lng={coords.lng}
                    zoom={15}
                    params={{v: '3.exp', key: 'AIzaSyAyesbQMyKVVbBgKVi2g6VX7mop2z96jBo'}}>
                    <Marker
                        lat={coords.lat}
                        lng={coords.lng}
                     />
                </Gmaps>
                <Row>
                    <Col md={4}>
                        <SocialMedia />
                    </Col>
                    <Col md={8}>
                        <Message />
                    </Col>
                </Row>


            </div>

        );
    }
}

export default Contact;
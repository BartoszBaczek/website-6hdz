import React, { Component } from 'react';
import GoogleMap from 'google-map-react';
import './Contact.css';

class Contact extends Component {
    render() {
        return (
            <div className="map">
                <GoogleMap
                    defaultCenter={{lat: 59.938043, lng: 30.337157}}
                    defaultZoom={9}>
                </GoogleMap>
            </div>
        );
    }
}

export default Contact;
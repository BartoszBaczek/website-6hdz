import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './MiniNews.css';

class MiniNews extends Component {
    render() {
        return (
            <div className="hovereffect">
                <Image src={process.env.PUBLIC_URL + '/../../assets/img/eventMiniatures/1.jpg'} responsive/>
                <div className="overlay">
                    <p>po najechaniu efekt</p>
                </div>
            </div>
        );
    }
}

export default MiniNews;
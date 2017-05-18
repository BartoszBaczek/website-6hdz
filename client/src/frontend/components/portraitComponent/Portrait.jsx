import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './Portrait.css';

class Portrait extends Component {
    render() {
        return (
            <div className="hovereffect">
                <Image className="center-img" src={process.env.PUBLIC_URL + this.props.photo} responsive/>
                <div className="overlay">
                    <h2>{this.props.scoutRank} {this.props.nameSurname}</h2>
                    <div className="pull-to-bottom">
                        <h4>{this.props.role}</h4>
                    </div>
                </div>
            </div>
        );
    }
}

export default Portrait ;
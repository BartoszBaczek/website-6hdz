import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import './Portrait.css';

class Portrait extends Component {
    render() {
        return (
            <div className="hovereffect">
                <Image src={process.env.PUBLIC_URL + this.props.photo} responsive/>
                <div className="overlay">
                    <h2>{this.props.scoutRank} {this.props.nameSurname}</h2>
                    <p>{this.props.yachtRank}</p>
                    <p>{this.props.role}</p>
                </div>
            </div>
        );
    }
}

export default Portrait ;
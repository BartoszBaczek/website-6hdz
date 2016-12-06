import React, { Component } from 'react';
import './Portrait.css';
import { Image } from 'react-bootstrap';

class Portrait extends Component {
    propTypes: {
        scoutRank : React.PropTypes.string,
        yachtRank : React.PropTypes.string,
        nameSurname : React.PropTypes.string,
        role : React.PropTypes.string,
        photo : React.PropTypes.string,
    }

    render() {
        return (
            <div className="hovereffect">
                <Image src={process.env.PUBLIC_URL + this.props.photo} responsive/>
                <div className="overlay">
                    <h2>{this.props.scoutRank} {this.props.nameSurname}</h2>
                    <p className="info">{this.props.yachtRank}</p>
                    <p className="info">{this.props.role}</p>
                </div>
            </div>
        );
    }
}

export default Portrait ;
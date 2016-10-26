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
            <div>
                <div>
                    <Image className="portrait-img img-center" src={process.env.PUBLIC_URL + this.props.photo} responsive circle />
                </div>
                <p className="center-vertically white-text">
                    <div><h3>{this.props.scoutRank + ' ' + this.props.nameSurname}</h3></div>
                    <div>{this.props.yachtRank}</div>
                    <div>{this.props.role}</div>
                </p>
            </div>
        );
    }
}

export default Portrait ;
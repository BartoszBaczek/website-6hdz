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
                <Image className="center" src={process.env.PUBLIC_URL + this.props.photo}/>
                <div className="overlay">
                    <h2>{this.props.scoutRank} {this.props.nameSurname}</h2>
                    <p class="info">{this.props.yachtRank}</p>
                    <p class="info">{this.props.role}</p>
                </div>
            </div>
        );
    }
}

export default Portrait ;
import React, { Component } from 'react';
import './Portrait.css';
import { Image, Row, Col } from 'react-bootstrap';

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
                <Row>
                    <Col xs={12} md={12}>
                        <div>
                            <Image className="portrait-img img-center" src={process.env.PUBLIC_URL + this.props.photo} circle responsive />
                        </div>
                        <div className="center-vertically white-text">
                            <div><b>{this.props.scoutRank + ' ' + this.props.nameSurname}</b></div>
                            <div>{this.props.yachtRank}</div>
                            <div>{this.props.role}</div>
                        </div>

                    </Col>
                </Row>
            </div>
        );
    }
}

export default Portrait ;
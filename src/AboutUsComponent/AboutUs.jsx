import React, { Component } from 'react';
import Portrait from './Portrait'
import './AboutUs.css';
import { Row, Col } from 'react-bootstrap';
var aboutUsData = require("./aboutUs.json");

class AboutUs extends Component {
    componentWillMount() {
        console.log(aboutUsData.people);
    }
    render() {
        return (
            <div>
                <Row className="bottom-margin">
                    <Col xs={3} md={3}>
                        <Portrait
                            scoutRank={aboutUsData.people[0].scoutRank}
                            yachtRank={aboutUsData.people[0].yachtRank}
                            nameSurname={aboutUsData.people[0].nameSurname}
                            role={aboutUsData.people[0].role}
                            photo={aboutUsData.people[0].photo}
                        />
                    </Col>
                    <Col xs={3} md={3}>
                        <Portrait
                        scoutRank={aboutUsData.people[1].scoutRank}
                        yachtRank={aboutUsData.people[1].yachtRank}
                        nameSurname={aboutUsData.people[1].nameSurname}
                        role={aboutUsData.people[1].role}
                        photo={aboutUsData.people[1].photo}
                    />
                    </Col>
                    <Col xs={3} md={3}>
                        <Portrait
                            scoutRank={aboutUsData.people[2].scoutRank}
                            yachtRank={aboutUsData.people[2].yachtRank}
                            nameSurname={aboutUsData.people[2].nameSurname}
                            role={aboutUsData.people[2].role}
                            photo={aboutUsData.people[2 ].photo}
                        />
                    </Col>
                    <Col xs={3} md={3}>
                        <Portrait
                            scoutRank={aboutUsData.people[3].scoutRank}
                            yachtRank={aboutUsData.people[3].yachtRank}
                            nameSurname={aboutUsData.people[3].nameSurname}
                            role={aboutUsData.people[3].role}
                            photo={aboutUsData.people[3].photo}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} md={3}>
                        <Portrait
                            scoutRank={aboutUsData.people[4].scoutRank}
                            yachtRank={aboutUsData.people[4].yachtRank}
                            nameSurname={aboutUsData.people[4].nameSurname}
                            role={aboutUsData.people[4].role}
                            photo={aboutUsData.people[4].photo}
                        />
                    </Col>
                    <Col xs={3} md={3}>
                        <Portrait
                            scoutRank={aboutUsData.people[5].scoutRank}
                            yachtRank={aboutUsData.people[5].yachtRank}
                            nameSurname={aboutUsData.people[5].nameSurname}
                            role={aboutUsData.people[5].role}
                            photo={aboutUsData.people[5].photo}
                        />
                    </Col>
                    <Col xs={3} md={3}>
                        <Portrait
                            scoutRank={aboutUsData.people[6].scoutRank}
                            yachtRank={aboutUsData.people[6].yachtRank}
                            nameSurname={aboutUsData.people[6].nameSurname}
                            role={aboutUsData.people[6].role}
                            photo={aboutUsData.people[6].photo}
                        />
                    </Col>
                    <Col xs={3} md={3}>
                        <Portrait
                            scoutRank={aboutUsData.people[7].scoutRank}
                            yachtRank={aboutUsData.people[7].yachtRank}
                            nameSurname={aboutUsData.people[7].nameSurname}
                            role={aboutUsData.people[7].role}
                            photo={aboutUsData.people[7].photo}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col xs={3} md={3}>
                        <Portrait
                            scoutRank={aboutUsData.people[8].scoutRank}
                            yachtRank={aboutUsData.people[8].yachtRank}
                            nameSurname={aboutUsData.people[8].nameSurname}
                            role={aboutUsData.people[8].role}
                            photo={aboutUsData.people[8].photo}
                        />
                    </Col>
                    <Col xs={3} md={3}>
                        <Portrait
                            scoutRank={aboutUsData.people[9].scoutRank}
                            yachtRank={aboutUsData.people[9].yachtRank}
                            nameSurname={aboutUsData.people[9].nameSurname}
                            role={aboutUsData.people[9].role}
                            photo={aboutUsData.people[9].photo}
                        />
                    </Col>
                    <Col xs={3} md={3}>
                        <Portrait
                            scoutRank={aboutUsData.people[10].scoutRank}
                            yachtRank={aboutUsData.people[10].yachtRank}
                            nameSurname={aboutUsData.people[10].nameSurname}
                            role={aboutUsData.people[10].role}
                            photo={aboutUsData.people[10].photo}
                        />
                    </Col>
                    <Col xs={3} md={3}>
                        <Portrait
                            scoutRank={aboutUsData.people[2].scoutRank}
                            yachtRank={aboutUsData.people[2].yachtRank}
                            nameSurname={aboutUsData.people[2].nameSurname}
                            role={aboutUsData.people[2].role}
                            photo={aboutUsData.people[2].photo}
                        />
                    </Col>
                </Row>
            </div>
        );
    }
}

export default AboutUs;
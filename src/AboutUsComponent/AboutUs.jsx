import React, { Component } from 'react';
import Portrait from './Portrait'
import './AboutUs.css';
import { Col } from 'react-bootstrap';
var aboutUsData = require("../../data/people.json");

class AboutUs extends Component {
    componentWillMount() {
        console.log(aboutUsData.people);
    }
    render() {

        let portraits = [];
        for (let i = 2; i <= aboutUsData.people.length - 1; i+=3) {
            console.log(i);
            portraits.push(
                <Col md={11} mdOffset={1} className="vertical-offset">
                    <Col md={3} mdOffset={1}>
                        <Portrait
                            scoutRank={aboutUsData.people[i-2].scoutRank}
                            yachtRank={aboutUsData.people[i-2].yachtRank}
                            nameSurname={aboutUsData.people[i-2].nameSurname}
                            role={aboutUsData.people[i-2].role}
                            photo={aboutUsData.people[i-2].photo}
                            />
                    </Col>
                    <Col md={3}>
                        <Portrait
                            scoutRank={aboutUsData.people[i-1].scoutRank}
                            yachtRank={aboutUsData.people[i-1].yachtRank}
                            nameSurname={aboutUsData.people[i-1].nameSurname}
                            role={aboutUsData.people[i-1].role}
                            photo={aboutUsData.people[i-1].photo}
                            />
                    </Col>
                    <Col md={3}>
                        <Portrait
                            scoutRank={aboutUsData.people[i].scoutRank}
                            yachtRank={aboutUsData.people[i].yachtRank}
                            nameSurname={aboutUsData.people[i].nameSurname}
                            role={aboutUsData.people[i].role}
                            photo={aboutUsData.people[i].photo}
                            />
                    </Col>
                </Col>
            );
        }
        return (
            <div>{portraits}</div>
        );
    }
}

export default AboutUs;
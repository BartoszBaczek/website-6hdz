import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import Portrait from '../../components/portraitComponent/Portrait';
import aboutUsService from '../../services/aboutUsService';
import './AboutUs.css';

class AboutUs extends Component {

    constructor() {
        super();

        this.state = {
            people: []
        }
    }

    componentDidMount() {
        aboutUsService.getAll((error, response) => {
            this.setState({people: response.body})
        });
    }

    render() {

        let portraits = []
        for (let i = 0; i <= this.state.people.length; i+=3) {
            if ((this.state.people.length - i) >= 3) {
                portraits.push(
                        <Col key={i} md={11} xs={12} mdOffset={1} className="vertical-offset">
                            <Col md={3} mdOffset={1} xs={4}>
                                <Portrait
                                    scoutRank={this.state.people[i].scoutRank}
                                    yachtRank={this.state.people[i].yachtRank}
                                    nameSurname={this.state.people[i].nameSurname}
                                    role={this.state.people[i].role}
                                    photo={this.state.people[i].photo}
                                />
                            </Col>
                            <Col md={3} xs={4}>
                                <Portrait
                                    scoutRank={this.state.people[i+1].scoutRank}
                                    yachtRank={this.state.people[i+1].yachtRank}
                                    nameSurname={this.state.people[i+1].nameSurname}
                                    role={this.state.people[i+1].role}
                                    photo={this.state.people[i+1].photo}
                                />
                            </Col>
                            <Col md={3} xs={4}>
                                <Portrait
                                    scoutRank={this.state.people[i+2].scoutRank}
                                    yachtRank={this.state.people[i+2].yachtRank}
                                    nameSurname={this.state.people[i+2].nameSurname}
                                    role={this.state.people[i+2].role}
                                    photo={this.state.people[i+2].photo}
                                />
                            </Col>
                        </Col>
                )
            } else if ((this.state.people.length - i) === 2) {
                portraits.push(
                    <Col>
                        <Col key={i} md={3} mdOffset={3} className="vertical-offset">
                            <Portrait
                                scoutRank={this.state.people[i].scoutRank}
                                yachtRank={this.state.people[i].yachtRank}
                                nameSurname={this.state.people[i].nameSurname}
                                role={this.state.people[i].role}
                                photo={this.state.people[i].photo}
                            />
                        </Col>
                        <Col md={3}>
                            <Portrait
                                scoutRank={this.state.people[i+1].scoutRank}
                                yachtRank={this.state.people[i+1].yachtRank}
                                nameSurname={this.state.people[i+1].nameSurname}
                                role={this.state.people[i+1].role}
                                photo={this.state.people[i+1].photo}
                            />
                        </Col>
                    </Col>
                )
            } else if ((this.state.people.length - i) === 1) {
                portraits.push(
                        <Col key={i} md={11} mdOffset={1} className="vertical-offset">
                            <Col md={3} mdOffset={4}>
                                <Portrait
                                    scoutRank={this.state.people[i].scoutRank}
                                    yachtRank={this.state.people[i].yachtRank}
                                    nameSurname={this.state.people[i].nameSurname}
                                    role={this.state.people[i].role}
                                    photo={this.state.people[i].photo}
                                />
                            </Col>
                        </Col>
                )
            }
        }
        return(
            <div>{portraits}</div>
        );
    }
}

export default AboutUs;
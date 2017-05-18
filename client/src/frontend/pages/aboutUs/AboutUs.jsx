import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
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

        let portraits = [];

        for (let i = 0; i <= this.state.people.length - 1; i++) {
            if ((this.state.people.length - i) >= 3) {
                portraits.push(
                    <Col className="centered-content" md={4} xs={6}>
                        <Portrait
                            scoutRank={this.state.people[i].scoutRank}
                            yachtRank={this.state.people[i].yachtRank}
                            nameSurname={this.state.people[i].nameSurname}
                            role={this.state.people[i].role}
                            photo={this.state.people[i].photo}
                        />
                    </Col>
                )
            } else if ((this.state.people.length - i) >= 1) {
                portraits.push(
                    <Col className="centered-content" md={6} xs={6}>
                        <Portrait
                            scoutRank={this.state.people[i].scoutRank}
                            yachtRank={this.state.people[i].yachtRank}
                            nameSurname={this.state.people[i].nameSurname}
                            role={this.state.people[i].role}
                            photo={this.state.people[i].photo}
                        />
                    </Col>
                )
            } else {
                portraits.push(
                    <Col className="centered-content" md={12} xs={12}>
                        <Portrait
                            scoutRank={this.state.people[i].scoutRank}
                            yachtRank={this.state.people[i].yachtRank}
                            nameSurname={this.state.people[i].nameSurname}
                            role={this.state.people[i].role}
                            photo={this.state.people[i].photo}
                        />
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
import React, { Component } from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import partnersService from '../../services/partnersService';
import './Partners.css';


class Partners extends Component {
     constructor() {
        super();

        this.state = {
            partners: []
        }
    }

    componentDidMount() {
        partnersService.getAll((error, response) => {
            this.setState({partners: response.body})
        });
    }

    render() {
        
        let logos = []
        for (let i = 0; i <= this.state.partners.length; i+=4) {
            if ((this.state.partners.length - i) >= 4) {
                logos.push(
                    <Row key={i}>
                        <Col md={3}>
                            <Image src={process.env.PUBLIC_URL + this.state.partners[i].logo} responsive/>
                        </Col>
                        <Col md={3}>
                            <Image src={process.env.PUBLIC_URL + this.state.partners[i+1].logo} responsive/>
                        </Col>
                        <Col md={3}>
                            <Image src={process.env.PUBLIC_URL + this.state.partners[i+2].logo} responsive/>
                        </Col>
                        <Col md={3}>
                            <Image src={process.env.PUBLIC_URL + this.state.partners[i+3].logo} responsive/>
                        </Col>
                    </Row>
                )
            } else if ((this.state.partners.length - i) === 3) {
                logos.push(
                    <Row key={i}>
                        <Col md={11} mdOffset={1}>
                            <Col md={3} mdOffset={1}>
                                <Image src={process.env.PUBLIC_URL + this.state.partners[i].logo} responsive/>
                            </Col>
                            <Col md={3}>
                                <Image src={process.env.PUBLIC_URL + this.state.partners[i+1].logo} responsive/>
                            </Col>
                            <Col md={3}>
                                <Image src={process.env.PUBLIC_URL + this.state.partners[i+2].logo} responsive/>
                            </Col>
                        </Col>
                    </Row>
                )
            } else if ((this.state.partners.length - i) === 2) {
                logos.push(
                    <Row key={i}>
                        <Col md={3} mdOffset={3}>
                            <Image src={process.env.PUBLIC_URL + this.state.partners[i].logo} responsive/>
                        </Col>
                        <Col md={3}>
                            <Image src={process.env.PUBLIC_URL + this.state.partners[i+1].logo} responsive/>
                        </Col>
                    </Row>
                )
            } else if ((this.state.partners.length - i) === 1) {
                logos.push(
                    <Row key={i}>
                        <Col md={11} mdOffset={1}>
                            <Col md={3} mdOffset={4}>
                                <Image src={process.env.PUBLIC_URL + this.state.partners[i].logo} responsive/>
                            </Col>
                        </Col>
                    </Row>
                )
            }
        }
        return(
            <div>
                {logos}
            </div>
        );
    }
}

export default Partners;




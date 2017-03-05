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
            }
        }
            
             /*else if (logos.Count == 3)  {
                    <Col md={11} mdOffset={1}>
                    <Col mdOffset={1} md={3}>
                        photo
                    </Col>
                    <Col md={3}>
                        photo
                    </Col>
                    <Col md={3}>
                        photo
                    </Col>
                    </Col>
                } else if (logos.count == 2) {
                    <Col mdOffset={3} md={3}>
                        photo
                    <Col>
                    <Col md={3}>
                        photos
                    </Col>
                } else {

                }
            } */

        return(
            <div>
                {logos}
            </div>
        );
    }
}

export default Partners;




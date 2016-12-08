import React, { Component } from 'react';
import './Message.css';
import { Col, Row, FormControl, Button } from 'react-bootstrap';

class Message extends Component {
    sendEmail() {
        alert('chcialbys');
    }

    render() {
        return (
            <div className="margin-top-2">
                <Row>
                    <Col md={6}>
                        <FormControl type="text" placeholder="imię"/>
                    </Col>
                    <Col md={6}>
                        <FormControl type="text" placeholder="email"/>
                    </Col>
                    <Col md={12} className="margin-top-2">
                        <FormControl componentClass="textarea" type="textarea" placeholder="wiadomość" rows={10}/>
                    </Col>
                    <Col md={12} className="margin-top-1">
                        <Button bsSize="medium" block onClick={this.sendEmail}>Wyślij</Button>
                    </Col>

                </Row>

            </div>
        );
    }
}

export default Message;
import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import MiniNews from '../../components/miniNewsComponent/MiniNews';
import './MiniNewsPanel.css';

class MiniNewsPanel extends Component {

    render() {
        return (
            <Col md={10} mdOffset={1} className="top-margin">
                <Row>
                    <Col md={3}>  
                        <MiniNews />
                    </Col>
                    <Col md={3}>  
                        <MiniNews />
                    </Col>
                    <Col md={3}>  
                        <MiniNews />
                    </Col>
                    <Col md={3}>  
                        <MiniNews />
                    </Col>
                </Row>
            </Col>
        );
    }
}

export default MiniNewsPanel;
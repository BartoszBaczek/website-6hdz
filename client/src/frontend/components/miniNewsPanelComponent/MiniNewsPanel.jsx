import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';
import MiniNews from '../../components/miniNewsComponent/MiniNews';
import './MiniNewsPanel.css';

class MiniNewsPanel extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        let miniNews = [];
        if (this.props.data) {
            for (let i = 0; i <= this.props.data.length; i++) {
                miniNews.push(
                    <Col md={3}>  
                        <MiniNews data={this.props.data[i]}/>
                    </Col>
                )
            }
        }

        return (
            <Col md={10} mdOffset={1} className="top-margin">
                <Row>
                    {miniNews}
                </Row>
            </Col>
        );
    }
}

export default MiniNewsPanel;
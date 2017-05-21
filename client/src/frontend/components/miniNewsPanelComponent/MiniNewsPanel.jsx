import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import MiniNews from '../../components/miniNewsComponent/MiniNews';
import './MiniNewsPanel.css';

class MiniNewsPanel extends Component {

    render() {
        let miniNews = [];
        if (this.props.data) {
            for (let i = 0; i <= this.props.data.length - 1; i++) {
                miniNews.push(
                    <Col key={i} md={3} className="mini-news-placeholder">  
                        <MiniNews data={this.props.data[i]} miniNewsClicked={this.props.miniNewsClicked}/>
                    </Col>
                )
            }
        }

        return (
            <Col md={10} mdOffset={1} className="top-margin mini-news-panel-placeholder">
                    {miniNews}
            </Col>
        );
    }
}

export default MiniNewsPanel;
import React, { Component } from 'react';
import { Col, Image } from 'react-bootstrap';
import Loading from './../loadingComponent/Loading';
import dangerousHtml from './../../common/dangerousHtml';
import './MainNews.css';

class MainNews extends Component {

    constructor(props) {
        super(props)
    }

    render() {
        let component;

        if (this.props.data) {
           let html = dangerousHtml.convert(this.props.data.mainContent)
           component = <div dangerouslySetInnerHTML={html} />
        } else {
            component = <Loading />
        }

        return (
            <Col md={10} mdOffset={1} className="main-news-placeholder">
                {component}
            </Col>
        );
    }
}

export default MainNews;
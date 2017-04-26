import React, { Component } from 'react';
import { Image } from 'react-bootstrap';
import Loading from './../loadingComponent/Loading'
import dangerousHtml from './../../common/dangerousHtml';
import './MiniNews.css';

class MiniNews extends Component {
    render() {
        let component;

        if (this.props.data) {
            let html = dangerousHtml.convert(this.props.data.miniContent)
            component = <span dangerouslySetInnerHTML={html} />
        } else {
            component = <Loading />
        }

        return (
            <div className="mini-news-placeholder">
                {component}
            </div>
        );
    }
}

export default MiniNews;
import React, { Component } from 'react';
import Loading from './../loadingComponent/Loading'
import dangerousHtml from './../../common/dangerousHtml';
import './MiniNews.css';

class MiniNews extends Component {

    miniNewsClicked() {
        this.props.miniNewsClicked(this.props.data);
    }

    render() {
        let component;

        if (this.props.data) {
            let html = dangerousHtml.convert(this.props.data.miniContent)
            component = <span dangerouslySetInnerHTML={html} onClick={this.miniNewsClicked.bind(this)}/>
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
import React, { Component } from 'react';
import MainNews from '../../components/mainNewsComponent/MainNews';
import MiniNewsPanel from '../../components/miniNewsPanelComponent/MiniNewsPanel';
import newsService from '../../services/newsService';
import arrayUtils from '../../../utils/arrayUtils';
import './News.css';

class News extends Component {

    constructor() {
        super();

        this.state = {
            news: []
        }
    }

    componentDidMount() {
        newsService.getAll((error, response) => {
            this.setState({news: response.body})
        });
    }

    updateMainNews(selectedNews) {

        let newsClone = this.state.news.slice();

        let selectedNewsIndex = this.state.news.map((e) => { 
            return e.index; 
        }).indexOf(selectedNews.index);
        
        arrayUtils.swap(newsClone, 0, selectedNewsIndex);
        
        arrayUtils.sortExceptFirst(newsClone, ((a, b) => {
            return a.index - b.index
        }));

        this.setState({
            news: newsClone
        });
    }

    render() {
        return(
            <div className="background-with-fixed-height">
                <MainNews 
                    data={this.state.news[0]}
                />
                <MiniNewsPanel 
                    data={this.state.news.slice(1, this.state.news.length)}
                    miniNewsClicked={this.updateMainNews.bind(this)}
                />
            </div>
        );
    }
}

export default News;




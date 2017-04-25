import React, { Component } from 'react';
import MainNews from '../../components/mainNewsComponent/MainNews';
import MiniNewsPanel from '../../components/miniNewsPanelComponent/MiniNewsPanel';
import newsService from '../../services/newsService';
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

    render() {
        return(
            <div className="background-with-fixed-height">
                <MainNews 
                    data={this.state.news[0]}
                />
                <MiniNewsPanel 
                    data={this.state.news.slice(1, this.state.news.length)}
                />
            </div>
            
        );
    }
}

export default News;




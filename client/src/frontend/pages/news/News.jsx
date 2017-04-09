import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import MainNews from '../../components/mainNewsComponent/MainNews';
import MiniNewsPanel from '../../components/miniNewsPanelComponent/MiniNewsPanel';
import './News.css';


class News extends Component {
    
    render() {
        return(
            <div className="background-with-fixed-height">
                <MainNews />
                <MiniNewsPanel />
            </div>
            
        );
    }
}

export default News;




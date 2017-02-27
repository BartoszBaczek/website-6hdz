import React, { Component } from 'react';
import ParallaxSegment from './ParallaxSegment';
import './Header.css';
var parallaxScrollData = require("../../data/parallaxScroll.json");


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = {
            scrollOffset: window.pageYOffset
        }
    }

    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll = (event) => {
        let scrollY = 
        this.setState({scrollOffset: window.pageYOffset});
    }

    render() {
        return(
            <div className="parallax-container">
                <ParallaxSegment 
                speed={0.1}
                maxScroll={565}
                currentScroll={this.state.scrollOffset}
                top={-100}
                zIndex={5}
                backgroundImage={"./../assets/img/parallax/layer1.png"}/>
                <ParallaxSegment 
                speed={0.3}
                maxScroll={565}
                currentScroll={this.state.scrollOffset}
                top={-50}
                zIndex={10}
                backgroundImage={"./../assets/img/parallax/layer2.png"}/>
                <ParallaxSegment 
                speed={0.5}
                maxScroll={565}
                currentScroll={this.state.scrollOffset}
                top={-10}
                zIndex={15}
                backgroundImage={"./../assets/img/parallax/layer3.png"}/>
                <ParallaxSegment 
                speed={0.7}
                maxScroll={565}
                currentScroll={this.state.scrollOffset}
                top={65}
                zIndex={20}
                backgroundImage={"./../assets/img/parallax/layer4.png"}/>
                <ParallaxSegment 
                speed={0.9}
                maxScroll={565}
                currentScroll={this.state.scrollOffset}
                top={150}
                zIndex={25}
                backgroundImage={"./../assets/img/parallax/layer5.png"}/>
            </div>
            
        );
    }
}

export default Header;




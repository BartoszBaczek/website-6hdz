import React, { Component } from 'react';
import './ParallaxSegment.css';

class ParallaxSegment extends Component {
   constructor(props) {
        super(props);

        this.state = {
            webkitTransform: null
        }

        this.setYTransform(-(this.props.scrollY * this.props.speed));
    }

    componentWillReceiveProps() {
        let offset;
        if (this.props.currentScroll < this.props.maxScroll) {       // to mi sie nie podoba (dla 300 wyglada lepiej, ale dlaczego)
            offset = -(this.props.currentScroll * this.props.speed);
            this.setYTransform(offset);
        }
    }   

    setYTransform(offset) {
        this.state.webkitTransform = "translate3d(0, " + offset + "px, 0)";
    }

    render() {
        return(
            <div style={
                {
                    top:`${this.props.top}px`, 
                    zIndex: this.props.zIndex, 
                    backgroundImage: `url(${this.props.backgroundImage})`,
                    WebkitTransform: this.state.webkitTransform}
                } 
                className="parallax-layer">
            </div>
        );
    }
}

export default ParallaxSegment;




import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './Content.css';

class Content extends Component {
    render() {
        return(
            <div>
                <Element name="section-1" className="element background-red">
                    Ugabuga !
                </Element>
                <Element name="section-2" className="element background-green">
                    Abababa !
                </Element>
                <Element name="section-3" className="element background-pink">
                    Bulululu !
                </Element>
                <Element name="section-4" className="element background-blue">
                    Hejho !
                </Element>
                <Element name="section-5" className="element background-yellow">
                    Plepleple !
                </Element>
                <Element name="section-6" className="element background-gray">
                    Plepleple !
                </Element>
            </div>
        );
    }
}

export default Content;
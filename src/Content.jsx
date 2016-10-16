import React, { Component } from 'react';
import { Element } from 'react-scroll';
import './Content.css';

class Content extends Component {
    render() {
        return(
            <div>
                <Element name="section-1" className="element background-red">
                    Starting page
                </Element>
                <Element name="section-2" className="element background-green">
                    Aktualności
                </Element>
                <Element name="section-3" className="element background-pink">
                    O nas
                </Element>
                <Element name="section-4" className="element background-blue">
                    Media
                </Element>
                <Element name="section-5" className="element background-yellow">
                    Lokalizacja
                </Element>
                <Element name="section-6" className="element background-gray">
                    Nasi partnerzy
                </Element>
                <Element name="section-7" className="element background-aqua">
                    Kontakt
                </Element>
            </div>
        );
    }
}

export default Content;
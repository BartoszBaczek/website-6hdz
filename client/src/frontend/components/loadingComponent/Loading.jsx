import React, { Component } from 'react';
import Loading from 'react-loading'
import './Loading.css';

// this loading animation doesn't look that good, so I will change it anyway
class Loader extends Component {

    render() {
        return (
            <div className="centered-balls">
                <Loading type='balls' color='#e3e3e3' />
            </div>
        );
    }
}

export default Loader;
import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import Content from './Content';



class App extends Component {
  render() {
    return (
        <div className="color-schema">
            <NavigationBar />
            <Content />
        </div>
    );
  }
}

export default App;

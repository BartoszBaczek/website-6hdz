import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar.jsx';
import Content from './Content.jsx';



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

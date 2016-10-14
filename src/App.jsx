import React, { Component } from 'react';
import './App.css';
import NavigationBar from './NavigationBar.jsx';



class App extends Component {
  render() {
    return (
        <div>
            <NavigationBar />
            <div>Website content</div>
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <img
        style={{width: 50, height: 50}}
        src={'https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-9/542487_397868403614289_100432499_n.jpg?oh=03c9a75b5d5aeebeed641914da7973fb&oe=5865B7D5'} alt="boohoo" className="img-responsive"/>
        <div>Ola & Bartek </div>
      </div>
    );
  }
}

export default App;

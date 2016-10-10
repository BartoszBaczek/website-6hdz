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
        style={{width: 200, height: 200}}
        src={'https://scontent-mrs1-1.xx.fbcdn.net/v/t1.0-9/542487_397868403614289_100432499_n.jpg?oh=03c9a75b5d5aeebeed641914da7973fb&oe=5865B7D5'} alt="boohoo" className="img-responsive"/>
        <img
        style={{width: 200, height: 200}}
        src={'https://scontent-mrs1-1.xx.fbcdn.net/v/t34.0-12/14527505_1174241999310255_1899457905_n.jpg?oh=d3495f4771c5a64b92f505a3059c6541&oe=57FD8CBA'} alt="boohoo" className="img-responsive"/>
      </div>
    );
  }
}

export default App;

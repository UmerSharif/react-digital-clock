import React, { Component } from 'react';
import Tick from './components/clock/tick';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Tick/>
      </div>
    );
  }
}

export default App;

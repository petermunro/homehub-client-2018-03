import React, { Component } from 'react';
import Uptime from './Uptime';
import Hubname from './Hubname';
import AccessoryList from './AccessoryList';
import SetHubName from './SetHubName';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to <Hubname /></h1>
        </header>
        <div className="App-intro">
          <Uptime />
          <SetHubName />
          <AccessoryList />
        </div>
      </div>
    );
  }
}

export default App;

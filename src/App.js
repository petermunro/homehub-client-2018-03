import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';
import Uptime from './Uptime';
import Hubname from './Hubname';
import AccessoryList from './AccessoryList';
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
          <AccessoryList />
        </div>
      </div>
    );
  }
}

const MyQuery = gql`
  query MyQuery {
    system {
      hubname
      uptime
      uptimeDelayed
    }
  }
`;

const MyAppWithData = graphql(MyQuery)(App);
export default MyAppWithData;

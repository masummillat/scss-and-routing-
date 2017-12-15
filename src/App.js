import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppRoute from './components/AppRoute'
class App extends Component {
  render() {
    return (
      <div id="react-container"className="App">
            <AppRoute/>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Header from './components/header';
import logo from './logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to THE JOKES</h1>
        </header>
        <Header />
      </div>
    );
  }
}

export default App;

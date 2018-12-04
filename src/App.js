import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Components/Button';

class App extends Component {
  myOnClick = () => {
    console.log('HelloWorld :D');
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Button text="Click me" onClick={this.myOnClick} />
      </div>
    );
  }
}

export default App;

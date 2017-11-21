import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import './app.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <form action="#">
          <input type="text" placeholder="Enter city"/>
          <button>OK</button>
        </form>
        <div className="results">
          <ul>
            <li>Lorem</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import jwt_decode from 'jwt-decode'; 
import Nav from './components/Nav/Nav'
import './App.css';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Nav />
      </React.Fragment>
    )
  }
}

export default App;

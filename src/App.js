import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import jwt_decode from 'jwt-decode'; 
import Nav from './components/Nav/Nav'
import Routes from './config/routes'
import './App.css';

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Nav />
        <Routes />
      </React.Fragment>
    )
  }
}

export default App;

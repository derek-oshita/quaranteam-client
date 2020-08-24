import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import jwt_decode from 'jwt-decode'; 
import Nav from './components/Nav/Nav'
import Routes from './config/routes'
import './App.css';

class App extends Component {
  // state = {
  //   currentUser: localStorage.getItem('token'), 
  // }; 

  // componentDidMount() {
  //   const token = localStorage.getItem('token'); 
  //   if(token) {
  //     setAuthHeader(token); 
  //   }
  // }
  render() {
    return (
      <React.Fragment>
        <Nav />
        <Routes />
      </React.Fragment>
    )
  }
}

export default App;

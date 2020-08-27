import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'; 
import jwt_decode from 'jwt-decode'; 
import Nav from './components/Nav/Nav';
import Routes from './config/routes'; 
import setAuthHeader from './utils/setAuthHeader';



import './App.less';

class App extends Component {

  state = {
    currentUser: localStorage.getItem('token'),
  }; 

  componentDidMount() {
    const token = localStorage.getItem('token'); 
    if (token) {
      setAuthHeader(token); 
      const decodedToken = jwt_decode(token); 
      this.setState({currentUser: decodedToken.id})
    }
  }; 

  setCurrentUser = (token) => {
    localStorage.setItem('token', token); 
    setAuthHeader(token); 
    const decodedToken = jwt_decode(token); 
    this.setState({currentUser: decodedToken.id})
  }; 

  logout = () => {
    localStorage.removeItem('token'); 
    setAuthHeader(); 
    this.setState({currentUser: ''}); 
    this.props.history.push('/login'); 
  }; 

  render() {
    // console.log('App.js currentUser= ', this.state.currentUser)
    return (
      <React.Fragment>
        <Nav currentUser={this.state.currentUser} logout={this.logout}/>
        <Routes setCurrentUser={this.setCurrentUser} currentUser={this.state.currentUser}/>
      </React.Fragment>
    )
  }
}

export default withRouter(App);

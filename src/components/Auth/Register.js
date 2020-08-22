import React, { Component } from 'react'; 
import { withRouter } from 'react-router-dom'; 
import axios from 'axios'; 

class Register extends Component {
    state = {
       username: '', 
       email: '', 
       password: '',  
    }; 

    render () {
        return (
            <div>
                This is the form....
            </div>
        )
    }
}; 

export default Register; 
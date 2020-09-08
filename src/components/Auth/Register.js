// IMPORTS
import React, { Component } from 'react'; 
import { withRouter } from 'react-router-dom'; 
import axios from 'axios'; 
import './Register.css'; 
// ANT DESIGN 
import { Button } from 'antd';
// VARIABLES 
// const validEmailRegex = RegExp(/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i);
// const validateForm = (errors) => {
//     let valid = true; 
//     Object.values(errors).forEach(
//         (val) => val.length > 0 && (valid = false)
//     )
//     return valid; 
// }

// REGISTER
class Register extends Component {
    state = {
       username: '', 
       email: '', 
       password: '',  
    //    errors: {
    //        username: '', 
    //        email: '', 
    //        password: '', 
    //    }
    }; 

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value, 
        }); 
    }; 

    // handleChange = (event) => {
    //     event.preventDefault(); 
    //     const { name, value } = event.target; 
    //     let errors = this.state.errors; 
    //     switch (name) {
    //         case 'username': 
    //             errors.username = value.length < 1
    //             ? 'This field is required.'
    //             : ''; 
    //             break; 
    //         case 'email':
    //             errors.email = validEmailRegex.test(value)
    //             ? ''
    //             : 'Invalid email address';
    //             break; 
    //         case 'password': 
    //             errors.password = value.length < 4
    //             ? 'Password must be at least 3 characters long.'
    //             : ''; 
    //             break;   
    //         default: 
    //             break; 
    //     }
    //     this.setState({errors, [name]: value})
    // }; 

    handleSubmit = (event) => {
        event.preventDefault(); 
        // if (validateForm(this.state.errors)) {
        //     console.info('Valid form')
        // } else {
        //     console.log('Invalid form')
        // }
        // axios.post(`${process.env.REACT_APP_API}/auth/register`, this.state)
        axios.post(`api/v1/auth/register`, this.state)
            .then((res) => {
                console.log(res);
                this.props.history.push('/login');  
            })
            .catch((err) => {
                console.log(err.response.status); 
                console.log(err.response.data); 
                console.log(err.response.data.message); 
            });
    };

    render () {
        return (
            // Borrowed forms from KennyB. 
            <div className="register-container">
                <div className="register-form-container">
                    <h3 className="register">Register</h3>
                    <form onSubmit={this.handleSubmit} className="register-form">
                        {/* USERNAME */}
                        <div className="form-item animate__fadeIn animate__animated">
                            <label htmlFor="username">Username: </label>
                            <input onChange={this.handleChange} type="text" id="username" name="username" value={this.state.username} />
                        </div>
                        {/* EMAIL */}
                        <div className="form-item animate__fadeIn animate__animated">
                            <label htmlFor="email">Email: </label>
                            <input onChange={this.handleChange} type="text" id="email" name="email" value={this.state.email} />
                        </div>
                        {/* PASSWORD */}
                        <div className="form-item animate__fadeIn animate__animated">
                            <label htmlFor="password">Password: </label>
                            <input onChange={this.handleChange} type="text" id="password" name="password" value={this.state.password} />
                        </div>
                        {/* SUBMIT BUTTON */}
                        <Button type="primary" onClick={this.handleSubmit} className="animate__fadeIn animate__animated">Register</Button>
                    </form>
                </div>
            </div>
        )
    }
}; 

// EXPORTS
export default withRouter(Register); 
// IMPORTS
import React, { Component } from 'react'; 
import { withRouter } from 'react-router-dom'; 
import axios from 'axios'; 
import './Register.css'; 
// ANT DESIGN 
import { Button } from 'antd';

// REGISTER
class Register extends Component {
    state = {
       username: '', 
       email: '', 
       password: '',  
    }; 

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value, 
        }); 
    }; 

    handleSubmit = (event) => {
        event.preventDefault(); 
        axios.post(`${process.env.REACT_APP_API}/auth/register`, this.state)
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
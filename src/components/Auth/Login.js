// IMPORTS
import React from 'react'; 
import { withRouter } from 'react-router-dom'; 
import axios from 'axios';
import './Login.css'; 

// LOGIN
class Login extends React.Component {
    state = {
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
        axios.post(`${process.env.REACT_APP_API}/auth/login`, this.state)
            .then((res) => {
                console.log(res)
                this.props.setCurrentUser(res.data.token); 
                // change this to events later
                this.props.history.push('/events'); 
            })
            .catch((err) => {
                console.log(err.response.status); 
                console.log(err.response.data); 
                console.log(err.response.data.message); 
            }); 
    }; 
    
    render () {
        return (
            <div className="login-container">
            <div className="login-form-container">
                <h3 className="login">Login</h3>
                <form onSubmit={this.handleSubmit} className="login-form">
                    {/* EMAIL */}
                    <div className="form-item">
                        <label htmlFor="email">Email: </label>
                        <input onChange={this.handleChange} type="text" id="email" name="email" value={this.state.email} />
                    </div>
                    {/* PASSWORD */}
                    <div className="form-item">
                        <label htmlFor="password">Password: </label>
                        <input onChange={this.handleChange} type="text" id="password" name="password" value={this.state.password} />
                    </div>
                    {/* SUBMIT BUTTON */}
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
        )
    }
}; 

// EXPORTS
export default withRouter(Login); 
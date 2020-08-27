import React from 'react'; 
import { Link } from 'react-router-dom'
import './About.css'; 

function About() {
    return (
        <section className="about-main-container">
            <div className="about-table">
                <div className="get">
                    <h4 className="get-h4">Get Real Data</h4>
                    <p>Using data from Covidtracking.com, you can trust that information regarding the pandemic is both comprehensive and up to date. We also relay helpful metadata around each state, as provided by Civil.Services.</p>
                    <p><Link to="/register">Register</Link></p>
                </div>
                <div className="post">
                    <h4 className="post-h4">Comment On It</h4>
                    <p>We know it's tough for everyone out there there. Every state has handled the pandemic a little differently, so we encourage you to share your experience with other users so we can continue to stay safe and flatten the curve together.</p>
                    <p><Link to="/login">Login</Link></p>
                </div>

            </div>
        </section>
    )
}; 

export default About; 
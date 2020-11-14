// IMPORTS
import React from 'react'; 
import { Link } from 'react-router-dom'
import './About.css'; 

// ABOUT
function About() {
    return (
        // <section className="about-main-container">
        //     <div className="about-table" id="about">
        //         <div className="get">
        //             <h4 className="get-h4">Get Real Data</h4>
        //             <p className="about-p">Using data from Covidtracking.com, you can trust that information regarding the pandemic is both comprehensive and up to date. We also relay helpful metadata around each state, as provided by Civil.Services.</p>
        //             <p className="call-to-action about-p"><Link to="/register">Register</Link></p>
        //         </div>
        //         <div className="post">
        //             <h4 className="post-h4">Comment On It</h4>
        //             <p className="about-p">It's rough out there. Every state has handled the pandemic a little differently, so we encourage you to share your experience with other users so we can continue to stay safe and flatten the curve together.</p>
        //             <p className="call-to-action about-p"><Link to="/login">Login</Link></p>
        //         </div>

        //     </div>
        // </section>
        <>
            {/* GET  */}
            <div className="get">
                <h4 className="get-h4">Get Real Data</h4>
                <p className="about-p">Using data from Covidtracking.com, you can trust that information regarding the pandemic is both comprehensive and up to date. We also relay helpful metadata around each state, as provided by Civil.Services.</p>
                <p className="call-to-action"><Link to="/register">Register</Link></p>
            </div>

            {/* DIVIDER */}
            <div className="about-divider">
            </div>

            {/* POST */}
            <div className="post">
                <h4 className="post-h4">Post It</h4>
                <p className="about-p">It's rough out there. Every state has handled the pandemic a little differently, so we encourage you to share your experience with other users so we can continue to stay safe and flatten the curve together.</p>
                <p className="call-to-action"><Link to="/login">Login</Link></p>
            </div>
        </>
    )
}; 

// EXPORTS
export default About; 
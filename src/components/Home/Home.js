// IMPORTS
import React from 'react'; 
import About from '../About/About'; 
import reopen from './reopen.jpg'
import './Home.css'; 

// HOME COMPONENT
function Home () {
    // console.log(reopen)
    return (
        <>
        <main className="hero-main">
            {/* HERO  */}
            <div className="hero-container">
                <img className="hero animate__animated animate__fadeInUp" src={reopen}></img>
            </div>
            {/* <div className="divider">
            </div> */}
            {/* ABOUT */}
            <About />
        </main>
        </>
    )
}

// EXPORTS
export default Home; 


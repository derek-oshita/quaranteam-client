// IMPORTS
import React from 'react'; 
import './StateImage.css'; 

function StateImage (props) {
        // console.log('stateimage data: ', props.data)
        let stateData = {}; 
        // if (props.data !== undefined) {
        //     stateData = props.data
        //     // stateData = {...props.data}
        //     console.log('stateimage.js ', stateData)
        // } 
        // console.log('state data: ', stateData.nickname)
        return (
            <>
            {/* NAME */}
                {
                    props.data !== undefined ? 
                    (<p className="state">{props.data.state}</p>)
                    : 
                    (<p>Loading...</p>)
        
                }
            {/* NICKNAME */}
                {
                    props.data !== undefined ? 
                    (<p className="nickname">"{props.data.nickname}"</p>)
                    : 
                    (<p>Loading...</p>)
        
                }
            {/* FLAG */}
                {
                    props.data !== undefined ? 
                    (<img src={props.data.state_flag_url}></img>)
                    : 
                    (<p>Loading...</p>)
        
                }

            </>
        )
};

export default StateImage; 


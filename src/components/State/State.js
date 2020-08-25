import React from 'react'; 


function State (props) {
    const { state } = props; 

    return(
        <div>
            <p>{state.state}</p>
            <p>{}</p>
        </div>
    )
}; 

export default State; 
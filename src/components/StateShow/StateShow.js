import React from 'react'; 

function StateShow (props) {
    const stateData = props.stateData; 
    return (
        <div>
            StateShow...
            <p>{console.log(stateData)}</p>
        </div>
    )
}; 

export default StateShow; 
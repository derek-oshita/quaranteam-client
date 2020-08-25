// IMPORTS
import React from 'react'; 
import { Link } from 'react-router-dom'; 

// STATE
function State (props) {
    const { stateObj, list } = props; 
    return(
        <Link to={`/states/${stateObj.state}`}>
        <div>
            <p>{stateObj.state}</p>
            <div>
                {!list && (
                <>  
                <p>{stateObj.state}</p>  
                <p>{stateObj.dataQualityGrade}</p>
                </>
                )}
            </div>
        </div>
        </Link>
    )
}; 

// EXPORTS
export default State; 
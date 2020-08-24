import React from 'react'; 


function Event (props) {
    const { event } = props; 

    return(
        <div>
            <p>{event.title}</p>
        </div>
    )
}; 

export default Event; 
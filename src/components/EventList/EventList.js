import React from 'react'; 
import Event from '../Event/Event'

function EventList (props) {
    const eventList = props.events.map((eventObj) => {
        return <Event key={eventObj.id} event={eventObj} ></Event>
    })
    return (
        <div>
            {eventList}
        </div>
    )
}

export default EventList; 
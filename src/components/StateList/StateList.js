import React from 'react'; 
import State from '../State/State'

function StateList (props) {
    const stateList = props.states.map((stateObj) => {
        return <State key={stateObj.id} stateObj={stateObj} list={true}></State>
    })
    return (
        <div>
            {stateList}
        </div>
    )
}

export default StateList; 
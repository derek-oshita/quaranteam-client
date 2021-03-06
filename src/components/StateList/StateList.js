// IMPORTS
import React from 'react'; 
import State from '../State/State'; 
import './StateList.css'; 
// ANT DESIGN 
import { Row, Col, Divider } from 'antd';
const style = { background: '#0092ff', padding: '8px 0' };

// STATELIST
function StateList (props) {
    const stateList = props.states.map((stateObj) => {
        return <State key={stateObj.id} stateObj={stateObj} ></State>
    })
    return (
    <>
    <Divider orientation="left" ><span className="table-header">Periodic Table of the US</span></Divider>
    <div className="statelist-container">
        <div className="statelist-table">
            <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>
                {stateList}
            </Row>
        </div>
    </div>
    </>
    )
}

// EXPORTS
export default StateList; 
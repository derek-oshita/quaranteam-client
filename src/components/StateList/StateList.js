import React from 'react'; 
import State from '../State/State'; 
import './StateList.css'; 
// ANT DESIGN 
import { Row, Col, Divider } from 'antd';
const style = { background: '#0092ff', padding: '8px 0' };


function StateList (props) {
    const stateList = props.states.map((stateObj) => {
        return <State key={stateObj.id} stateObj={stateObj} ></State>
    })
    return (
    <>
    
    {/* {stateList} */}
    <Divider orientation="left" ><span className="table-header">Table of U.S. Data</span></Divider>
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

export default StateList; 
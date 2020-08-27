// IMPORTS
import React from 'react'; 
import { Link } from 'react-router-dom'; 
import './State.css'; 
// ANT DESIGN 
import { Row, Col, Divider } from 'antd';
const style = { padding: '8px 0' };

// STATE
function State (props) {
    const { stateObj, list } = props; 
    return(
        // <Link to={`/states/${stateObj.state}`}>
        <div>
        <Link to={`/states/${stateObj.state}`}>
        <Col className="gutter-row" span={6}>
        <div style={style}><span className="state-code">{stateObj.state}</span></div>
        </Col>
        </Link> 
            {/* <p>{stateObj.state}</p>
            <div>
                {!list && (
                <>  
                <p>{stateObj.state}</p>  
                <p>{stateObj.dataQualityGrade}</p>
                </>
                )}
            </div>
        </div> */}
        {/* </Link> */}
        </div>
    )
}; 

// EXPORTS
export default State; 
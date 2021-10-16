// IMPORTS
import React from "react";
import { Link } from "react-router-dom";
import "./State.css";
// ANT DESIGN
import { Row, Col, Divider } from "antd";
const style = { padding: "8px 0" };

// STATE
function State(props) {
  const { stateObj } = props;
  console.log("State.js");
  return (
    <div>
      <Link to={`/states/${stateObj.state}`}>
        <Col className="gutter-row" span={6}>
          <div style={style}>
            <span className="state-code">{stateObj.state}</span>
          </div>
        </Col>
      </Link>
    </div>
  );
}

// EXPORTS
export default State;

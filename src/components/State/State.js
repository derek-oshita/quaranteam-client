// IMPORTS
import React from "react";
import { Link } from "react-router-dom";
import { Col } from "antd";

import "./State.css";

function State(props) {
  const { stateObj } = props;
  return (
    <div>
      <Link to={`/states/${stateObj.state}`}>
        <Col className="gutter-row" span={6}>
          <div style={{ padding: "0.5em" }}>
            <span className="state-code">{stateObj.state}</span>
          </div>
        </Col>
      </Link>
    </div>
  );
}

export default State;

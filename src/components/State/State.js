// IMPORTS
import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, Badge } from "antd";

import "./State.css";

const { Meta } = Card;

function State(props) {
  const { state } = props.stateObj;
  return (
    <div>
      <Link to={`/states/${state}`}>
        {/* <Col className="gutter-row" span={6}>
          <div style={{ padding: "0.5em" }}>
            <span className="state-code">{stateObj.state}</span>
          </div>
        </Col> */}
        <div className="state-card-container">
          <Card hoverable cover={state}>
            {state}
            <Meta title={<Badge color="blue"></Badge>}></Meta>
          </Card>
        </div>
      </Link>
    </div>
  );
}

export default State;

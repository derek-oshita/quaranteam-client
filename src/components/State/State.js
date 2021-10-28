// IMPORTS
import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, Badge } from "antd";

import stateCodeToName from "../../utils/stateCodeToName";
import riskLevelToCustomData from "../../utils/riskLevelToCustomData";
import "./State.less";

const { Meta } = Card;

function State(props) {
  const { stateObj } = props;
  const { state } = props.stateObj;
  const overall = getNestedData(stateObj, "riskLevels", "overall");
  // console.log("state", state);
  // console.log("stateObj", stateObj);
  console.log("colorString", riskLevelToCustomData, overall);
  return (
    <div>
      <Link to={`/states/${state}`}>
        <div className="state-card-container">
          <Card
            className="state-card"
            hoverable
            style={{
              border: `2px solid ${
                riskLevelToCustomData[overall - 1].riskColor
              }`,
            }}
          >
            <div>
              <img
                className="state-card-img"
                alt={`The flag of ${stateCodeToName(state)}`}
                src={getNestedData(stateObj, "meta", "state_flag_url")}
              ></img>
            </div>
            <span>{state}</span>
            <Meta title={<Badge></Badge>}></Meta>
          </Card>
        </div>
      </Link>
    </div>
  );
}

const getNestedData = (stateObj, key, property) => {
  if (stateObj && stateObj[key] && stateObj[key][property]) {
    return stateObj[key][property];
  }
  return null;
};

export default State;

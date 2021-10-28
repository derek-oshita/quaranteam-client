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
  const overallRiskLevel = getNestedData(stateObj, "riskLevels", "overall");
  const nickname = getNestedData(stateObj, "meta", "nickname");
  const riskColor = riskLevelToCustomData[overallRiskLevel - 1].riskColor;

  console.log(stateObj);
  return (
    <div>
      <Link to={`/states/${state}`}>
        <div className="state-card-container">
          <Card className="state-card" hoverable>
            <div>
              <img
                className="state-card-img"
                alt={`The flag of ${stateCodeToName(state)}`}
                src={getNestedData(stateObj, "meta", "state_flag_url")}
              ></img>
            </div>
            {/* <Meta title={state} description={nickname}></Meta> */}
            <p className="state-card-code">{state}</p>
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

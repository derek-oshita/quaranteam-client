import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, Button, Tooltip } from "antd";

import stateCodeToName from "../../utils/stateCodeToName";
import RiskLevelData from "../../utils/RiskLevelData";
import "./State.less";

const { Meta } = Card;

function State(props) {
  const { stateObj } = props;
  const { state } = props.stateObj;
  const overallRiskLevel = getNestedData(stateObj, "riskLevels", "overall");
  const nickname = getNestedData(stateObj, "meta", "nickname");
  const RiskLevelModel = new RiskLevelData(overallRiskLevel);
  return (
    <Col>
      <Link to={`/states/${state}`}>
        <Tooltip title={`RISK LEVEL: ${RiskLevelModel.getRiskLevel()}`}>
          <div className="state-card-container">
            <Card
              className="state-card"
              hoverable
              cover={
                <img
                  className="state-card-img"
                  alt={`The flag of ${stateCodeToName(state)}`}
                  src={getNestedData(stateObj, "meta", "state_flag_url")}
                ></img>
              }
            >
              <Meta
                title={
                  <Button
                    shape="circle"
                    style={{
                      backgroundColor: `${RiskLevelModel.getRiskColor()}`,
                      border: "solid black 0.1em",
                      width: "5em",
                      height: "5em",
                    }}
                  >
                    <span className="state-card-code">{state}</span>
                  </Button>
                }
                description={
                  <>
                    <h3>{stateCodeToName(state)}</h3>
                    <p>{nickname}</p>
                  </>
                }
              />
            </Card>
          </div>
        </Tooltip>
      </Link>
    </Col>
  );
}

const getNestedData = (stateObj, key, property) => {
  if (stateObj && stateObj[key] && stateObj[key][property]) {
    return stateObj[key][property];
  }
  return null;
};

export default State;

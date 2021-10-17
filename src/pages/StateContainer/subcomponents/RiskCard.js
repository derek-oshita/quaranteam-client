import React, { useState, useEffect } from "react";
import { Card, Spin, Space } from "antd";

import CustomDataSets from "./CustomDataSets";
import "./RiskCard.less";
import { render } from "@testing-library/react";

const riskLevel = "riskLevel",
  riskColor = "riskColor";

/* 

Cases: 

daily new

metrics.caseDensity

infection rate

metrics.infectionRate

% vaccinated

% first dose

metrics.vaccinationsInitiatedRatio

% fully vaccinated

metrics.vaccinationsCompletedRatio

*/

const renderRisk = (riskLevelInteger, param) => {
  return CustomDataSets[riskLevelInteger][param];
};

const RiskCard = (props) => {
  const { state } = props.stateInfo;

  console.log(props);
  return (
    <div className="site-card-border-less-wrapper">
      <Card
        className="risk-card-component"
        title={state}
        bordered={false}
        style={{ width: 300 }}
      >
        <div className="riskColor">
          {props.stateInfo.riskLevels === undefined ? (
            <Space size="middle">
              <Spin size="large" />
            </Space>
          ) : (
            <div>
              <p
                style={{
                  backgroundColor: `${renderRisk(
                    props.stateInfo.riskLevels.overall,
                    riskColor
                  )}`,
                }}
              >
                {/* {renderRisk(props.stateInfo.riskLevels.overall, riskLevel)} */}
                {`${renderRisk(
                  props.stateInfo.riskLevels.overall,
                  riskLevel
                )} RISK`}
              </p>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
};

export default RiskCard;

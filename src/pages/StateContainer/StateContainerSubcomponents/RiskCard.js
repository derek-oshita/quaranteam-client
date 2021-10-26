import React, { useState, useEffect } from "react";
import { Card, Spin, Space } from "antd";

import riskLevelToCustomData from "../../../utils/riskLevelToCustomData";
import RiskMeter from "./RiskMeter";
import "./RiskCard.less";

const riskLevel = "riskLevel",
  riskColor = "riskColor";

/* 

CREATE AN ARRAY OF COLORS COMPONENT THAT WHERE THE COLOR AND NAME ARE ENLARGED BASED ON RISK LEVEL WHOA

Cases: 

DAILY NEW

metrics.caseDensity

INFECTION RATE

metrics.infectionRate

% VACCINATED

FIRST DOSE

metrics.vaccinationsInitiatedRatio

FULLY

metrics.vaccinationsCompletedRatio

ICU

*/

const renderRisk = (riskLevelInteger, param) => {
  return riskLevelToCustomData[riskLevelInteger][param];
};

const RiskCard = (props) => {
  const { stateInfo } = props;
  const { state } = props.stateInfo;

  return (
    <div className="site-card-border-less-wrapper">
      <RiskMeter stateInfo={stateInfo} />
      {/* <Card
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
                {`${renderRisk(
                  props.stateInfo.riskLevels.overall,
                  riskLevel
                )} RISK`}
              </p>
            </div>
          )}
        </div>
      </Card> */}
    </div>
  );
};

export default RiskCard;

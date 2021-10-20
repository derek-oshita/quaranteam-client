import React from "react";
import { Card, Button } from "antd";

import "./RiskMeter.less";

const customDataObj = [
  {
    riskLevel: "LOW",
    riskColor: "#00FF7F",
  },
  {
    riskLevel: "MEDIUM",
    riskColor: "#FBEC5D",
  },
  {
    riskLevel: "HIGH",
    riskColor: "#FFBF00",
  },
  {
    riskLevel: "SEVERE",
    riskColor: "#FF3131",
  },
  {
    riskLevel: "DON'T GO!",
    riskColor: "#770737",
  },
];

const RiskMeter = (props) => {
  console.log("riskMeter", props.stateInfo);

  const { overall } = props.stateInfo.riskLevels;

  return (
    <Card>
      {/* <Button style={{ backgroundColor: "#FF3131" }}>Button</Button> */}
      {renderRiskLevelButtons(customDataObj, overall)}
    </Card>
  );
};

const renderRiskLevelButtons = (arr, overallRisk) => {
  const buttons = arr.map((obj, idx) => {
    if (overallRisk === idx + 1) {
      return (
        <div className="risk-meter-btn-div">
          <Button
            id="overall-risk-btn"
            className="risk-meter-btn"
            style={{ backgroundColor: `${obj.riskColor}` }}
          >
            <span style={{ color: "white" }}>{obj.riskLevel}</span>
          </Button>
        </div>
      );
    }
    return (
      <div className="risk-meter-btn-div">
        <Button
          className="risk-meter-btn"
          style={{ backgroundColor: `${obj.riskColor}` }}
        >
          <span style={{ color: "white" }}>{obj.riskLevel}</span>
        </Button>
      </div>
    );
  });

  return buttons;
};

export default RiskMeter;

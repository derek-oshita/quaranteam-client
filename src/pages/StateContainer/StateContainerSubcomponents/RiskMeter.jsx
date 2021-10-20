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
  return (
    <Card>
      {/* <Button style={{ backgroundColor: "#FF3131" }}>Button</Button> */}
      {renderRiskLevelButtons(customDataObj)}
    </Card>
  );
};

const renderRiskLevelButtons = (arr) => {
  const buttons = arr.map((obj) => {
    return <Button>{obj.riskLevel}</Button>;
  });

  return buttons;
};

export default RiskMeter;

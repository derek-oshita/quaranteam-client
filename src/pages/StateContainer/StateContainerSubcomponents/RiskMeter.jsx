import React, { Component } from "react";
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

class RiskMeter extends Component {
  renderRiskLevelButtons = (arr, overallRisk) => {
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
  render() {
    console.log("riskmeter", this.props);
    return (
      <Card className="risk-meter-card">
        {this.renderRiskLevelButtons(
          customDataObj,
          this.props.stateInfo.riskLevels?.overall
        )}
      </Card>
    );
  }
}

export default RiskMeter;

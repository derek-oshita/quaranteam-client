import React, { Component } from "react";
import { Card, Button, Divider } from "antd";
import { WarningOutlined } from "@ant-design/icons";

import RiskLevelData from "../../../utils/RiskLevelData";
import "./RiskMeter.less";

const riskMeterHeader = "Risk Meter";

class RiskMeter extends Component {
  renderRiskLevelButtons = (arr, overallRisk) => {
    const buttons = arr.map((obj, idx) => {
      // Create a special button representing the state's risk level
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
      // Render all other buttons
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
    const {
      stateInfo: { riskLevels: { overall } = { overall: 0 } },
    } = this.props;
    const RiskLevelModel = new RiskLevelData(overall);
    return (
      <Card className="risk-meter-card">
        <div className="risk-meter-state-header-div">
          <span className="risk-meter-header">
            {" "}
            <WarningOutlined
              id="risk-warning-icon"
              style={{
                color: "rgb(255, 201, 0)",
              }}
            />{" "}
            {riskMeterHeader}
          </span>
        </div>
        <Divider />
        {this.renderRiskLevelButtons(
          RiskLevelModel.getCustomDataArr(),
          overall
        )}
      </Card>
    );
  }
}

export default RiskMeter;

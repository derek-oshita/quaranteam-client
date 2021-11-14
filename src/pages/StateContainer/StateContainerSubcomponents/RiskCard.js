import React from "react";

import RiskMeter from "./RiskMeter";
import "./RiskCard.less";

const riskLevel = "riskLevel",
  riskColor = "riskColor";

const RiskCard = (props) => {
  const { stateInfo } = props;
  const { state } = props.stateInfo;

  return (
    <div className="site-card-border-less-wrapper">
      <RiskMeter stateInfo={stateInfo} />
    </div>
  );
};

export default RiskCard;

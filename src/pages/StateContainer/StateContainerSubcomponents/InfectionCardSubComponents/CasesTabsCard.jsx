import React, { useState } from "react";
import { Card } from "antd";

import addCommasToNumber from "../../../../utils/addCommasToNumber";
import "./CasesTabsCard.less";

const CasesTabsCard = (props) => {
  const [activeTabKey, setActiveTabKey] = useState("New Cases");

  const { cases, newCases, testPositivityRatio } = props;

  const tabList = [
    { key: "New Cases", tab: "New Cases" },
    { key: "Test Positivity Ratio", tab: "Test Positivity Ratio" },
  ];

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  const calculatePercentageOfTotalCases = (numberOfCases, totalCases) => {
    return ((numberOfCases / totalCases) * 100).toFixed(2);
  };

  const contentList = {
    "New Cases": (
      <div className="cases-container">
        <span className="percentage">
          {calculatePercentageOfTotalCases(newCases, cases)}
          {"%"}
        </span>
        <span className="quantity-total">
          {" "}
          {newCases} / {addCommasToNumber(cases)} total cases
        </span>
      </div>
    ),
    "Test Positivity Ratio": (
      <div className="cases-container">
        <span className="percentage">
          {testPositivityRatio * 100}
          {"%"}
        </span>
        <span className="quantity-total">Test Positivity Ratio</span>
      </div>
    ),
  };

  return (
    <Card
      tabList={tabList}
      activeTabKey={activeTabKey}
      onTabChange={(key) => {
        onTabChange(key);
      }}
    >
      {contentList[activeTabKey]}
    </Card>
  );
};

export default CasesTabsCard;

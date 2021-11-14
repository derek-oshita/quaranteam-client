import React, { useState } from "react";

import { Card } from "antd";

const CasesTabsCard = (props) => {
  /* 
    cases: 5006025
    newCases: 9039
    testPositivityRatio: 0.025
    */
  const [activeTabKey, setActiveTabKey] = useState("New Cases");

  const { cases, newCases, testPositivityRatio } = props;

  const tabList = [
    { key: "New Cases", tab: "New Cases" },
    { key: "Test Positivity Ratio", tab: "Test Positivity Ratio" },
  ];

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  const contentList = {
    "New Cases": (
      <>
        {newCases} / {cases} total cases
      </>
    ),
    "Test Positivity Ratio": <>{testPositivityRatio}</>,
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

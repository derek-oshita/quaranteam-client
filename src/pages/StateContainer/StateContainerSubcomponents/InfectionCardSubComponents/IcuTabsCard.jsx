import React, { useState } from "react";
import { Card } from "antd";

import "./IcuTabsCard.less";

const tabList = [
  {
    key: "Covid ICU Usage",
    tab: "Covid ICU Usage",
  },
  {
    key: "Total ICU Usage",
    tab: "Total ICU Usage",
  },
  {
    key: "Total ICU Remaining",
    tab: "Total ICU Remaining",
  },
];

const IcuTabsCard = (props) => {
  const [activeTabKey, setActiveTabKey] = useState("Covid ICU Usage");

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  const { icuBeds: { currentUsageCovid } = { currentUsageCovid: 0 } } = props,
    { icuBeds: { currentUsageTotal } = { currentUsageTotal: 0 } } = props,
    { icuBeds: { capacity } = { capacity: 0 } } = props;

  const contentList = {
    "Covid ICU Usage": (
      <div className="icu-container">
        <span className="percentage">
          {calculatePercentageOfTotalCapacity(currentUsageCovid, capacity)}
          {"%"}
        </span>
        <span className="percentage-total">
          {" "}
          {currentUsageCovid} / {capacity} total beds
        </span>
      </div>
    ),
    "Total ICU Usage": (
      <div className="icu-container">
        <span className="percentage">
          {calculatePercentageOfTotalCapacity(currentUsageTotal, capacity)}
          {"%"}
        </span>
        <span className="percentage-total">
          {" "}
          {currentUsageTotal} / {capacity} total beds
        </span>
      </div>
    ),
    "Total ICU Remaining": (
      <div className="icu-container">
        <span className="percentage">
          {calculatePercentageOfTotalCapacity(
            capacity - currentUsageTotal,
            capacity
          )}
          {"%"}
        </span>
        <span className="percentage-total">
          {" "}
          {capacity - currentUsageTotal} / {capacity} total beds
        </span>
      </div>
    ),
  };

  return (
    <>
      <Card
        style={{ width: "100%" }}
        tabList={tabList}
        activeTabKey={activeTabKey}
        onTabChange={(key) => {
          onTabChange(key);
        }}
      >
        {contentList[activeTabKey]}
      </Card>
    </>
  );
};

const calculatePercentageOfTotalCapacity = (numberOfBeds, totalBeds) => {
  return ((numberOfBeds / totalBeds) * 100).toFixed(2);
};

export default IcuTabsCard;

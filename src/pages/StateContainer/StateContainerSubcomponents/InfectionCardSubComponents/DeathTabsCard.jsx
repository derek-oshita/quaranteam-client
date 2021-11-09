import React, { useState } from "react";
import { Card } from "antd";

import addCommasToNumber from "../../../../utils/addCommasToNumber";
import "./DeathTabsCard.less";

const DeathTabsCard = (props) => {
  const [activeTabKey, setActiveTabKey] = useState("New Deaths");

  const { deaths, newDeaths, population } = props;

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  const calculatePercentageOfTotalDeaths = (numberOfDeaths, totalDeaths) => {
    return ((numberOfDeaths / totalDeaths) * 100).toFixed(2);
  };

  const tabList = [
    {
      key: "New Deaths",
      tab: "New Deaths",
    },
    {
      key: "Total Deaths",
      tab: "Total Deaths",
    },
  ];

  const contentList = {
    "New Deaths": (
      <div className="deaths-container">
        <span className="percentage">
          {calculatePercentageOfTotalDeaths(newDeaths, deaths)}
          {"%"}
        </span>
        <span className="quantity-total">
          {" "}
          {newDeaths} / {deaths} new deaths
        </span>
      </div>
    ),
    "Total Deaths": (
      <div className="deaths-container">
        <span className="percentage">
          {" "}
          {calculatePercentageOfTotalDeaths(deaths, population)}
          {"%"}
        </span>
        <span className="quantity-total">
          {" "}
          {deaths} /{" "}
          {addCommasToNumber(population === undefined ? 0 : population)} total
          deaths
        </span>
      </div>
    ),
  };

  return (
    <>
      <Card
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

export default DeathTabsCard;

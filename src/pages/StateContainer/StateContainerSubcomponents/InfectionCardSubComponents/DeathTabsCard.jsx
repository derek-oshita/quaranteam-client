import React, { useState } from "react";

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

const DeathTabsCard = (props) => {
  const [activeTabKey, setActiveTabKey] = useState("New Deaths");

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  const { deaths, newDeaths } = props;
  return <></>;
};

export default DeathTabsCard;

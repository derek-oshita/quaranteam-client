import React, { useState } from "react";
import { Card } from "antd";

const tabList = [
  {
    key: "tab1",
    tab: "tab1",
  },
  {
    key: "tab2",
    tab: "tab2",
  },
];

const IcuTabsCard = (props) => {
  const { icuBeds: { capacity } = { capacity: 0 } } = props;
  const { icuBeds: { currentUsageCovid } = { currentUsageCovid: 0 } } = props;
  const { icuBeds: { currentUsageTotal } = { currentUsageTotal: 0 } } = props;

  console.log(currentUsageCovid);
  return <>IcuTabsCard</>;
};

export default IcuTabsCard;

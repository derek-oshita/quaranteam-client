import React, { useState } from "react";
import { Card } from "antd";

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
    key: "Total ICU Capacity",
    tab: "Total ICU Capacity",
  },
];

const IcuTabsCard = (props) => {
  // const [activeTabKey2, setActiveTabKey2] = useState('app');
  const [activeTabKey, setActiveTabKey] = useState("Covid ICU Usage");

  const onTabChange = (key) => {
    setActiveTabKey(key);
  };

  const { icuBeds: { currentUsageCovid } = { currentUsageCovid: 0 } } = props,
    { icuBeds: { currentUsageTotal } = { currentUsageTotal: 0 } } = props,
    { icuBeds: { capacity } = { capacity: 0 } } = props;

  const contentList = {
    "Covid ICU Usage": <p>{currentUsageCovid}</p>,
    "Total ICU Usage": <p>{currentUsageTotal}</p>,
    "Total ICU Capacity": <p>{capacity}</p>,
  };

  return (
    <>
      <Card
        style={{ width: "100%" }}
        tabList={tabList}
        activeTabKey={activeTabKey}
        // tabBarExtraContent={<a href="#">More</a>}
        onTabChange={(key) => {
          onTabChange(key);
        }}
      >
        {contentList[activeTabKey]}
      </Card>
    </>
  );
};

const calculatePercentageOfTotalCapacity = (numberOfBeds) => {};

export default IcuTabsCard;

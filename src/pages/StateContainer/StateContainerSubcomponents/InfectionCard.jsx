import React, { Component } from "react";
import { Card, Button, Divider } from "antd";

const InfectionCard = (props) => {
  const { stateInfo: { actuals } = { actuals: 0 } } = props;
  // const {
  //   stateInfo: { riskLevels: { overall } = { overall: 0 } },
  // } = this.props;
  // const {
  //   stateInfo: {
  //     actuals: { icuBeds: { capacity } = { capacity: 0 } },
  //   },
  // } = props;
  // console.log("actuals", actuals);
  return (
    <Card>
      {actuals && actuals.icuBeds && actuals.icuBeds.capacity}
      <Divider></Divider>
      {actuals && actuals.icuBeds && actuals.icuBeds.currentUsageTotal}
      <Divider></Divider>
      {actuals && actuals.icuBeds && actuals.icuBeds.currentUsageCovid}
    </Card>
  );
};
/* 
    new cases
    new deaths
    current ICU capacity

*/

export default InfectionCard;

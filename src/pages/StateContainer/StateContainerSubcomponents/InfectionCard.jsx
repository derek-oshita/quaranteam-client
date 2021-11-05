import React from "react";
import { Card, Button, Divider, Breadcrumb, PageHeader } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";

const InfectionCard = (props) => {
  const {
    stateInfo: { actuals: { icuBeds } = { icuBeds: 0 } },
  } = props;
  return (
    <Card>
      <PageHeader
        className="site-page-header"
        onBack={() => null}
        title="Title"
        subTitle="This is a subtitle"
      />
      ,<Divider></Divider>
      {icuBeds && icuBeds.currentUsageCovid} Covid ICU
      {icuBeds && icuBeds.currentUsageTotal} Total ICU Usage{" "}
      {icuBeds && icuBeds.capacity} Total ICU CapacitY
    </Card>
  );
};
/* 
    new cases
    new deaths
    current ICU capacity

*/

export default InfectionCard;

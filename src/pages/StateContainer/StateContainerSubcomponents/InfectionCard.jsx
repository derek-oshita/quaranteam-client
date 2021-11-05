import React from "react";
import { Card, Button, Divider, Breadcrumb, PageHeader } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";

import IcuTabsCard from "./InfectionCardSubComponents/IcuTabsCard";

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
      {/* <div className="icu-container">
          <span className="data-point">
            {" "}
            {icuBeds && icuBeds.currentUsageCovid} Covid ICU /
          </span>
        <span className="data-point">
          {" "}
          {icuBeds && icuBeds.currentUsageTotal} Total ICU Usage /
        </span>
        <span className="data-point">
          {" "}
          {icuBeds && icuBeds.capacity} Total ICU CapacitY
        </span>
      </div> */}
      <IcuTabsCard icuBeds={icuBeds} />
    </Card>
  );
};

export default InfectionCard;

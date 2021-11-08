import React from "react";
import { Card, Button, Divider, Breadcrumb, PageHeader } from "antd";
import { UserOutlined, HomeOutlined } from "@ant-design/icons";

import IcuTabsCard from "./InfectionCardSubComponents/IcuTabsCard";
import DeathTabsCard from "./InfectionCardSubComponents/DeathTabsCard";
import stateCodeToName from "../../../utils/stateCodeToName";

const InfectionCard = (props) => {
  const {
      stateInfo: { actuals: { icuBeds } = { icuBeds: 0 } },
    } = props,
    {
      stateInfo: { actuals: { deaths } = { deaths: 0 } },
    } = props,
    {
      stateInfo: { actuals: { newDeaths } = { newDeaths: 0 } },
    } = props;
  return (
    <Card>
      <PageHeader
        className="site-page-header"
        onBack={() => (window.location.href = "/states")}
        title={stateCodeToName(props?.stateInfo?.state)}
        subTitle={`Last Updated: ${props?.stateInfo?.lastUpdatedDate}`}
      />
      ,<Divider></Divider>
      <IcuTabsCard icuBeds={icuBeds} />
      <DeathTabsCard deaths={deaths} newDeaths={newDeaths} />
    </Card>
  );
};

export default InfectionCard;

import React from "react";
import { Card, Button, Divider, Breadcrumb, PageHeader } from "antd";

import IcuTabsCard from "./InfectionCardSubComponents/IcuTabsCard";
import DeathTabsCard from "./InfectionCardSubComponents/DeathTabsCard";
import CasesTabsCard from "./InfectionCardSubComponents/CasesTabsCard";
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
    } = props,
    {
      stateInfo: { actuals: { cases } = { cases: 0 } },
    } = props,
    {
      stateInfo: { actuals: { newCases } = { newCases: 0 } },
    } = props,
    {
      stateInfo: {
        metrics: { testPositivityRatio } = { testPositivityRatio: 0 },
      },
    } = props,
    { stateInfo: { population } = { population: 0 } } = props;

  return (
    <Card>
      <PageHeader
        className="site-page-header"
        onBack={() => (window.location.href = "/states")}
        title={stateCodeToName(props?.stateInfo?.state)}
        subTitle={`Last Updated: ${props?.stateInfo?.lastUpdatedDate}`}
      />
      ,<Divider></Divider>
      <CasesTabsCard
        cases={cases}
        newCases={newCases}
        testPositivityRatio={testPositivityRatio}
      />
      <IcuTabsCard icuBeds={icuBeds} />
      <DeathTabsCard
        deaths={deaths}
        newDeaths={newDeaths}
        population={population}
      />
    </Card>
  );
};

export default InfectionCard;

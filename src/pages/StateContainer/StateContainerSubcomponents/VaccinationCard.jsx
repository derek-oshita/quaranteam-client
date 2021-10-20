import React from "react";
import { Tooltip, Progress, Row, Col, Card } from "antd";

import "./VaccinationCard.less";

const VaccinationCard = (props) => {
  /* 
  A SECTION THAT TAKES GEOLOCATION AND FINDS VACCINATIONS NEAR THEM
  */
  const { vaxCompleted, vaxInitiated } = props;
  const { vaccinesAdministered, vaccinationsInitiated, vaccinationsCompleted } =
    props.stateInfo.actuals;
  const { state } = props.stateInfo;
  return (
    <div className="vaccination-card-container">
      <div className="vaccination-card">
        {/* PROGRESS BAR */}
        <Tooltip
          title={`Total Vaccines Administered: ${addCommasToNumber(
            vaccinesAdministered
          )}`}
        >
          <Card title={`${state} Vaccination Progress`}>
            <Progress
              percent={changeDecimalToPercentage(vaxInitiated)}
              success={{ percent: changeDecimalToPercentage(vaxCompleted) }}
              strokeLinecap="square"
            />
          </Card>
        </Tooltip>
        <Row>
          {/* FULLY VACCINATED WHEEL */}
          <Col span={12}>
            <Tooltip
              title={`Total Fully Vaccinated: ${addCommasToNumber(
                vaccinationsCompleted
              )}`}
            >
              <Card title="Fully Vaccinated">
                <Progress
                  type="circle"
                  percent={changeDecimalToPercentage(vaxCompleted)}
                  strokeLinecap="square"
                  strokeColor="#87d068"
                />
              </Card>
            </Tooltip>
          </Col>
          {/* RECEIVED FIRST DOSE WHEEL */}
          <Col span={12}>
            <Tooltip
              title={`Total Received First Dose: ${addCommasToNumber(
                vaccinationsInitiated
              )}`}
            >
              <Card title="Recieved First Dose">
                <Progress
                  type="circle"
                  percent={changeDecimalToPercentage(vaxInitiated)}
                  strokeLinecap="square"
                  strokeColor="108ee9"
                />
              </Card>
            </Tooltip>
          </Col>
        </Row>
      </div>
    </div>
  );
};

const changeDecimalToPercentage = (num) => {
  return num * 100;
};

const addCommasToNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default VaccinationCard;

import React from "react";
import { Tooltip, Progress, Row, Col, Card, Divider } from "antd";
import {
  SafetyCertificateOutlined,
  MehOutlined,
  SmileOutlined,
} from "@ant-design/icons";

import stateCodetoName from "../../../utils/stateCodeToName";
import "./VaccinationCard.less";

const VaccinationCard = (props) => {
  /* 
  A SECTION THAT TAKES GEOLOCATION AND FINDS VACCINATIONS NEAR THEM
  */

  const { vaxCompleted, vaxInitiated } = props;
  const { state } = props.stateInfo;
  const { vaccinesAdministered, vaccinationsInitiated, vaccinationsCompleted } =
    props.stateInfo.actuals;

  const totalVaccinationIcon = <SafetyCertificateOutlined />,
    receivedFirstDoseIcon = <MehOutlined />,
    fullyVaccinatedIcon = <SmileOutlined />;

  const vaccinationProgressHeader = `${stateCodetoName(
      state
    )} Vaccination Progress`,
    fullyVaccinatedHeader = "Fully Vaccinated",
    receivedFirstDoseHeader = "Received First Dose";

  return (
    <div className="vaccination-card-container">
      <div className="vaccination-card">
        {/* PROGRESS BAR */}
        <Tooltip
          title={`Total Vaccines Administered: ${addCommasToNumber(
            vaccinesAdministered
          )}`}
        >
          <Card>
            {renderHeaderWithIcon(
              totalVaccinationIcon,
              vaccinationProgressHeader
            )}
            <Divider />
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
              <Card>
                {renderHeaderWithIcon(
                  fullyVaccinatedIcon,
                  fullyVaccinatedHeader
                )}
                <Divider />
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
              <Card>
                {renderHeaderWithIcon(
                  receivedFirstDoseIcon,
                  receivedFirstDoseHeader
                )}
                <Divider />
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

const renderHeaderWithIcon = (icon, headerString) => {
  return (
    <div className="vaccination-header-div">
      <span className="vaccination-header">
        {icon}
        {headerString}{" "}
      </span>
    </div>
  );
};

const changeDecimalToPercentage = (num) => {
  return (num * 100).toFixed(1);
};

const addCommasToNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default VaccinationCard;

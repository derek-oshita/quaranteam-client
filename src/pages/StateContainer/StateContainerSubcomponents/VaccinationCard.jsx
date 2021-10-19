import React from "react";
import { Tooltip, Progress, Row, Col } from "antd";

const VaccinationCard = (props) => {
  /* 
  A SECTION THAT TAKES GEOLOCATION AND FINDS VACCINATIONS NEAR THEM
  */
  const { vaxCompleted, vaxInitiated } = props;
  const { vaccinesAdministered } = props.stateInfo.actuals;
  console.log(props);
  return (
    <>
      <Tooltip
        title={`Total Vaccines Administered: ${addCommasToNumber(
          vaccinesAdministered
        )}`}
      >
        <Progress
          percent={changeDecimalToPercentage(vaxInitiated)}
          success={{ percent: changeDecimalToPercentage(vaxCompleted) }}
          strokeLinecap="square"
        />
      </Tooltip>
      <Row>
        <Col span={12}>
          <Tooltip>
            Fully Vaccinated:
            <Progress
              type="circle"
              percent={changeDecimalToPercentage(vaxCompleted)}
              strokeLinecap="square"
              strokeColor="#87d068"
            />
          </Tooltip>
        </Col>
        <Col span={12}>
          <Tooltip>
            Received First Dose:
            <Progress
              type="circle"
              percent={changeDecimalToPercentage(vaxInitiated)}
              strokeLinecap="square"
              // format={() => "First Dose"}
              strokeColor="108ee9"
            />
          </Tooltip>
        </Col>
      </Row>
    </>
  );
};

const changeDecimalToPercentage = (num) => {
  return num * 100;
};

const addCommasToNumber = (num) => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export default VaccinationCard;

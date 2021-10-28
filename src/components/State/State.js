// IMPORTS
import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, Badge, Button, Row } from "antd";

import stateCodeToName from "../../utils/stateCodeToName";
import riskLevelToCustomData from "../../utils/riskLevelToCustomData";
import "./State.less";

const { Meta } = Card;

function State(props) {
  const { stateObj } = props;
  const { state } = props.stateObj;
  const overallRiskLevel = getNestedData(stateObj, "riskLevels", "overall");
  const nickname = getNestedData(stateObj, "meta", "nickname");
  const riskColor = riskLevelToCustomData[overallRiskLevel - 1].riskColor;

  console.log(stateObj);
  return (
    <div>
      <Link to={`/states/${state}`}>
        <div className="state-card-container">
          <Card
            className="state-card"
            hoverable
            cover={
              <img
                className="state-card-img"
                alt={`The flag of ${stateCodeToName(state)}`}
                src={getNestedData(stateObj, "meta", "state_flag_url")}
              ></img>
            }
          >
            {/* <img
              className="state-card-img"
              alt={`The flag of ${stateCodeToName(state)}`}
              src={getNestedData(stateObj, "meta", "state_flag_url")}
            ></img>
            <div className="state-card-title-container">
              <span>
                {" "}
                <Button
                  shape="circle"
                  style={{ backgroundColor: riskColor }}
                  size={"small"}
                >
                  {" "}
                </Button>
              </span>

              <span className="state-card-code">{state}</span>
            </div> */}

            {/* <Button style={{ backgroundColor: riskColor, width: "5em" }}>
              <span className="state-card-code">{state}</span>
            </Button>
            <p className="state-card-nickname">{nickname}</p> */}
            <Meta
              title={
                <Button
                  shape="circle"
                  style={{
                    backgroundColor: riskColor,
                    border: "solid black 0.1em",
                    width: "5em",
                    height: "5em",
                  }}
                >
                  <span className="state-card-code">{state}</span>
                </Button>
              }
              description={nickname}
            />
            {/* <Card type="inner" title={nickname} extra={<a href="#">More</a>}>
              <Meta
                title={
                  <Button
                    shape="circle"
                    style={{
                      backgroundColor: riskColor,
                      border: "solid black 0.1em",
                      width: "5em",
                      height: "5em",
                    }}
                  >
                    <span className="state-card-code">{state}</span>
                  </Button>
                }
                description={nickname}
              />
            </Card> */}
          </Card>
        </div>
        {/* TAB COMPONENT WHERE YOU CAN TOGGLE BETWEEN VACCINATED AND UNVACCINATED */}
      </Link>
    </div>
  );
}

const getNestedData = (stateObj, key, property) => {
  if (stateObj && stateObj[key] && stateObj[key][property]) {
    return stateObj[key][property];
  }
  return null;
};

export default State;

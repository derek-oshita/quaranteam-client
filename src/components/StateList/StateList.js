import React from "react";
import { Row, Col } from "antd";

import State from "../State/State";
import "./StateList.css";

const StateList = (props) => {
  const { statesMeta, states } = props;
  const stateList = states
    .filter(
      (stateData) =>
        // remove MP, DC, and PR
        stateData.state !== "MP" &&
        stateData.state !== "DC" &&
        stateData.state !== "PR"
    )
    .map((stateObj) => {
      stateObj = {
        ...stateObj,
        // append the meta property to the state based on the shared state code
        meta: statesMeta.find(
          (stateMetaData) => stateMetaData.code === stateObj.state
        ),
      };
      return <State key={stateObj.id} stateObj={stateObj}></State>;
    });
  return (
    <div className="statelist-container">
      <Row>{stateList}</Row>
    </div>
  );
};

export default StateList;

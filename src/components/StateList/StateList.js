import React from "react";
import { Row, Divider } from "antd";

import State from "../State/State";
import "./StateList.css";

function StateList(props) {
  const stateList = props.states.map((stateObj) => {
    return <State key={stateObj.id} stateObj={stateObj}></State>;
  });
  return (
    <>
      <div className="statelist-container">
        <div className="statelist-table">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{stateList}</Row>
        </div>
      </div>
    </>
  );
}

export default StateList;

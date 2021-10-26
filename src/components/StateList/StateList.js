import React from "react";
import { Row } from "antd";

import State from "../State/State";
import "./StateList.css";

function StateList(props) {
  const { statesMeta } = props;
  const stateList = props.states.map((stateObj) => {
    stateObj = {
      ...stateObj,
      meta: statesMeta.find(
        (stateMetaData) => stateMetaData.code === stateObj.state
      ),
    };
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

// IMPORTS
import React from "react";
import State from "../State/State";
import "./StateList.css";
// ANT DESIGN
import { Row, Divider } from "antd";

// STATELIST
function StateList(props) {
  const stateList = props.states.map((stateObj) => {
    return <State key={stateObj.id} stateObj={stateObj}></State>;
  });
  console.log("StateList.js");
  return (
    <>
      <Divider orientation="left">
        <span className="table-header">Periodic Table of the US</span>
      </Divider>
      <div className="statelist-container">
        <div className="statelist-table">
          <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}>{stateList}</Row>
        </div>
      </div>
    </>
  );
}

// EXPORTS
export default StateList;

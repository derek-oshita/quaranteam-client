// IMPORTS
import React from "react";
import StateImage from "../StateImage/StateImage";

// STATEIMAGELIST
function StateImageList(props) {
  let stateInfo = props.stateMeta.find(
    (stateObj) => stateObj.code === props.stateCode
  );
  return (
    <>
      <StateImage data={stateInfo} />
    </>
  );
}

// EXPORTS
export default StateImageList;

// IMPORTS
import React from "react";
import { Link } from "react-router-dom";
import { Col, Card, Badge } from "antd";

import stateCodeToName from "../../utils/stateCodeToName";
import "./State.less";

const { Meta } = Card;

function State(props) {
  const { state } = props.stateObj;
  const metaData = getMetaData(props);
  console.log(props.stateObj);
  console.log(metaData);
  return (
    <div>
      <Link to={`/states/${state}`}>
        <div className="state-card-container">
          <Card className="state-card" hoverable>
            <div>
              <img
                className="state-card-img"
                alt={`The flag of ${stateCodeToName(state)}`}
                src={getMetaProperty(metaData, "state_flag_url")}
              ></img>
            </div>
            <span>{state}</span>
            <Meta title={<Badge color="blue"></Badge>}></Meta>
          </Card>
        </div>
      </Link>
    </div>
  );
}

const getMetaData = (props) => {
  if (props.stateObj && props.stateObj.meta) {
    let meta = props.stateObj.meta;
    return meta;
  }
  return null;
};

const getMetaProperty = (metaDataObject, propertyName) => {
  if (metaDataObject) {
    return metaDataObject[propertyName];
  }
  return null;
};

export default State;

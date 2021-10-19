import React from "react";
import { Layout, Divider, Col, Row } from "antd";

import RiskCard from "./StateContainerSubcomponents/RiskCard";
import VaccinationCard from "./StateContainerSubcomponents/VaccinationCard";
import BreadcrumbNav from "./StateContainerSubcomponents/BreadcrumbNav";
import stateCodeToName from "../../components/Helpers/stateCodeToName";
import CommentListContainer from "../CommentListContainer/CommentListContainer";

import "./StateContainer.less";

const url = process.env.REACT_APP_URL;

class StateContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stateObj: {},
      collapsed: false,
    };
  }

  async componentDidMount() {
    await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const stateAbbreviation = this.props.match.params.state;
        this.setState(() => {
          return {
            stateObj: this.handleStateData(data, stateAbbreviation),
          };
        });
      })
      .catch((err) => {
        throw new Error("StateDataContainer: ", err);
      });
  }

  handleStateData = (arr, id) => {
    return arr.find((obj) => obj.state === id);
  };

  renderVaccinationCardComponent = () => {
    if (this.state.stateObj && this.state.stateObj.metrics) {
      const vaxInitiated =
        this.state.stateObj.metrics.vaccinationsInitiatedRatio;
      const vaxCompleted =
        this.state.stateObj.metrics.vaccinationsCompletedRatio;
      return (
        <VaccinationCard
          vaxInitiated={vaxInitiated}
          vaxCompleted={vaxCompleted}
        />
      );
    }
  };

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const stateInfo = this.state.stateObj;
    const stateCode = this.state.stateObj.state;
    const stateName = stateCodeToName(stateCode);
    const currentUser = this.props.currentUser;

    return (
      <Layout className="layout">
        <BreadcrumbNav stateCode={stateCode} />
        <Divider orientation="center">DATA</Divider>
        <Row gutter={[16, 24]}>
          <Col span={12}>{this.renderVaccinationCardComponent()}</Col>
          <Col span={12}>
            <RiskCard stateInfo={stateInfo} stateName={stateName} />
          </Col>
        </Row>

        <CommentListContainer stateCode={stateCode} currentUser={currentUser} />
      </Layout>
    );
  }
}

/* 
COMMENTED OUT CODE: 

        {<Link className="nav-link" to={`/states/${stateInfo.state}/comment`}>
          <Button type="primary">Add Comment</Button>
        </Link> }

        {<Footer style={{ textAlign: "center" }}>
        //   Ant Design ©2018 Created by Ant UED
        </Footer> }
*/

export default StateContainer;

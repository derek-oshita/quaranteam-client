import React from "react";
import { Layout } from "antd";

import RiskCard from "./StateContainerSubcomponents/RiskCard";
import BreadcrumbNav from "./StateContainerSubcomponents/BreadcrumbNav";
import stateCodeToName from "../../components/HelperFunctions/stateCodeToName";
import CommentListContainer from "../CommentListContainer/CommentListContainer";

import "./StateContainer.less";

const { Content, Footer } = Layout;
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
        <RiskCard stateInfo={stateInfo} stateName={stateName} />
        {/* <Link className="nav-link" to={`/states/${stateInfo.state}/comment`}>
          <Button type="primary">Add Comment</Button>
        </Link> */}
        {/* COMMENTS */}
        {/* // <Footer style={{ textAlign: "center" }}>
        //   Ant Design ©2018 Created by Ant UED
        // </Footer> */}
        <CommentListContainer stateCode={stateCode} currentUser={currentUser} />
      </Layout>
    );
  }
}

// EXPORTS
export default StateContainer;

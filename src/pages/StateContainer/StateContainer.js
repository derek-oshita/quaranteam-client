import React from "react";
import { Layout, Menu, Breadcrumb } from "antd";
import { NavLink, Link } from "react-router-dom";
import { Card, Col, Row } from "antd";
import { Button } from "antd";

import riskLevelToCustomData from "./CustomDataSets";
import RiskCard from "./subcomponents/RiskCard";
import StateName from "../../components/StateName/StateName";
import StateMeta from "../StateMeta/StateMeta";
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

  handleStateData = (arr, id) => {
    return arr.find((obj) => obj.state === id);
  };

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

  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  };

  render() {
    const stateInfo = this.state.stateObj;
    const stateCode = this.state.stateObj.state;
    const currentUser = this.props.currentUser;

    return (
      <Layout className="layout">
        {/* CONTENT */}
        <Content style={{ padding: "0 2px" }}>
          {/* BREADCUMB LINKS */}
          <Breadcrumb style={{ margin: "10px 0" }}>
            <Breadcrumb.Item>
              <NavLink className="nav-link" exact to="/">
                Home
              </NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <NavLink className="nav-link" exact to="/states">
                State Data
              </NavLink>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <StateName abbrev={stateInfo.state} />
            </Breadcrumb.Item>
          </Breadcrumb>

          {/* DATA CARDS */}
          <div className="site-layout-content">
            {/* STATEMETA */}
            <StateMeta abbrev={stateInfo.state} />
            {/* DATA CARDS */}
            <RiskCard />
            {/* BUTTON */}
            <div>
              <Link
                className="nav-link"
                to={`/states/${stateInfo.state}/comment`}
              >
                <Button type="primary">Add Comment</Button>
              </Link>
            </div>
          </div>
        </Content>
        {/* COMMENTS */}
        <CommentListContainer stateCode={stateCode} currentUser={currentUser} />
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©2018 Created by Ant UED
        </Footer>
      </Layout>
    );
  }
}

// EXPORTS
export default StateContainer;

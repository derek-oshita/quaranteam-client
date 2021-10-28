import React, { Component } from "react";
import { Spin, Space, Divider } from "antd";

import StateList from "../../components/StateList/StateList";
import "./StateDataContainer.less";

class StateDataContainer extends Component {
  state = {
    states: [],
    statesMeta: [],
  };

  setDataForStates = () => {
    const url = process.env.REACT_APP_URL;
    fetch(url, {
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
        this.setState({
          states: data,
        });
      })
      .catch((err) => {
        throw new Error("StateDataContaier: ", err);
      });
  };

  setDataforStatesMeta = () => {
    const url = process.env.REACT_APP_URL_META;
    fetch(url, {
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
        this.setState({
          statesMeta: data,
        });
      })
      .catch((err) => {
        throw new Error("StateDataContaier: ", err);
      });
  };

  async componentDidMount() {
    await this.setDataForStates();
    await this.setDataforStatesMeta();
  }

  render() {
    const { states, statesMeta } = this.state;
    return (
      <>
        <Divider orientation="left">
          <span className="table-header">US COVID-19 Data</span>
        </Divider>
        {states.length !== 0 ? (
          <StateList states={states} statesMeta={statesMeta} />
        ) : (
          <Space className="space-med" size="middle">
            <Spin size="large" />
          </Space>
        )}
      </>
    );
  }
}

export default StateDataContainer;

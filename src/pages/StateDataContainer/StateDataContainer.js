import React, { Component } from "react";
import { Spin, Space, Divider } from "antd";

import StateList from "../../components/StateList/StateList";
import "./StateDataContainer.less";

const url = process.env.REACT_APP_URL;

class StateDataContainer extends Component {
  state = {
    states: [],
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
        this.setState(() => {
          return {
            states: data,
          };
        });
      })
      .catch((err) => {
        throw new Error("StateDataContainer: ", err);
      });
  }

  render() {
    const { states } = this.state;
    console.log(states);
    return (
      <>
        <Divider orientation="left">
          <span className="table-header">US COVID-19 Data</span>
        </Divider>
        {states.length !== 0 ? (
          <StateList states={states} />
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

import React, { Component } from "react";
import env from "react-dotenv";

import StateList from "../../components/StateList/StateList";

const url =
  "https://api.covidactnow.org/v2/states.json?apiKey=92336aa3c19944c39701f740c3e7ce63";

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
    return (
      <section>
        <StateList states={states} />
      </section>
    );
  }
}

// EXPORTS
export default StateDataContainer;

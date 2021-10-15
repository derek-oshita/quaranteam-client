// IMPORTS
import React, { Component } from "react";
import StateList from "../../components/StateList/StateList";

// STATE DATA CONTAINER
class StateDataContainer extends Component {
  state = {
    states: [],
  };
  componentDidMount() {
    fetch("StateData.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        this.setState(() => {
          const updatedState = res;
          return {
            states: updatedState,
          };
        });
      })
      .catch((err) => {
        throw new Error(err);
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

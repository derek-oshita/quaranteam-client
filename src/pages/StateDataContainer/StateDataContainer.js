import React, { Component } from 'react'; 
import StateList from '../../components/StateList/StateList';


class StateDataContainer extends Component {
    state = {
        states: [], 
    }; 
    componentDidMount() {
        fetch('https://api.covidtracking.com/v1/states/current.json')
            .then((response) => (response.json()))
            .then((data) => {
                this.setState({
                    states: data
                })
            })
            .catch((err) => console.log(err))
    }; 

    render() {
        return(
            <section>
                {/* {console.log(this.state.states)} */}
                <StateList states={this.state.states} />
            </section>
        )
    }
}; 

export default StateDataContainer; 
import React from 'react'; 
import State from '../../components/State/State'

class StateContainer extends React.Component {
    
    state = {
        state: {}, 
    };  

    componentDidMount() {
        fetch(`https://api.covidtracking.com/v1/states/${this.props.match.params.state}/current.json`)
            .then((response) => (response.json()))
            .then((data) => {
                this.setState({
                    state: data
                })
            })
            .catch((err) => console.log(err))
    }; 

    render() {
        const stateInfo = this.state.state; 
        return(
            <section>
                {console.log(this.state.state.state)}
                <p>{stateInfo.state}</p>
            </section>
        )
    }
}; 

export default StateContainer; 

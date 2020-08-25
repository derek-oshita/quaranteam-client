import React from 'react'; 
// import State from '../../components/State/State'; 
import StateName from '../../components/StateName/StateName'; 

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
        // if (stateInfo.state == 'CA') {
        //     stateInfo.state = 'California'
        //     return stateInfo.state
        // }
        return(
            <section>
                {console.log(stateInfo.state)}


                <p>{stateInfo.state}</p>


                <StateName abbrev={stateInfo.state}/> 
            </section>
        )
    }
}; 

export default StateContainer; 

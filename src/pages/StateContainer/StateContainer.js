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
        // function formatDate (updatedAt) {
        //     let updatedAt = stateInfo.lastUpdateEt; 
        // }
        return(
            <section className="main-state-container">
                {/* STATE NAME  */}
                <div className="state-name-container">
                <StateName abbrev={stateInfo.state}/> 
                </div>
                {/* STATE DATA */}
                <p>Data Quality: <strong>{stateInfo.dataQualityGrade}</strong></p>
                {/* DATE */}
                <p>Last Updated: {stateInfo.lastUpdateEt}</p>
                {/* DEATHS */}
                <p>Total Deaths: {stateInfo.death}</p>
                {/* POSITIVE */}
                <p>Positive Cases: {stateInfo.positive}</p>
                {/* NEGATIVE */}
                <p>Negative Cases: {stateInfo.negative}</p>
                {/* TOTAL */}
                <p>Total Test Results: {stateInfo.totalTestResults}</p>



            </section>
        )
    }
}; 

export default StateContainer; 

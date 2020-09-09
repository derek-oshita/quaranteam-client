// IMPORTS
import React from 'react'; 
import StateImageList from '../../components/StateImageList/StateImageList'; 
// const url ='http://localhost:4000/api/v1/meta'; 
const url = 'https://enigmatic-garden-30320.herokuapp.com/api/v1/meta'; 

// STATEMETA
class StateMeta extends React.Component {
    state = {
        stateMeta: [], 
    }
    componentDidMount() {
        fetch(url)
            .then((response) => (response.json()))
            .then((data) => {
                this.setState({
                    stateMeta: data
                })
            })
            .catch((err) => console.log(err))
    }
    render () {
        return(
            <React.Fragment>
                <StateImageList stateCode={this.props.abbrev} stateMeta={this.state.stateMeta}/>
            </React.Fragment>
        )
    }
}; 

// EXPORTS
export default StateMeta; 

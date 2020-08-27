import React from 'react'; 
import StateImageList from '../../components/StateImageList/StateImageList'; 
const url ='http://localhost:4000/api/v1/meta'; 

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
        // console.log('StateMeta props: ', this.props.abbrev)
        // console.log('StateMeta: ', this.state.stateMeta)
        return(
            <React.Fragment>
                <StateImageList stateCode={this.props.abbrev} stateMeta={this.state.stateMeta}/>
            </React.Fragment>
        )
    }
}; 

export default StateMeta; 

// this.props.stateCode  
// this.props.stateMeta  
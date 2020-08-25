import React from 'react'; 
const url ='https://github.com/CivilServiceUSA/us-states/blob/master/data/states.json'; 

class StateImages extends React.Component {
    state = {
        state_flag_urls: '', 
    }

    componentDidMount() {
        fetch(url)
            .then((response) => (response.json()))
            .then((data) => {
                this.setState({
                    state_flag_urls: data
                })
            })
            .catch((err) => console.log(err))
    }
    render () {
        // console.log('  stateImages props: ', this.props.abbrev)
        console.log(this.state.state_flag_urls)
        let symbl = this.props.abbrev; 
        return(
            <div>
                State Images... 
            </div>
        )
    }
}

export default StateImages; 
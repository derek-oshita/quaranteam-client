import React, { Component } from 'react'; 
import EventList from '../../components/EventList/EventList'

class EventListContainer extends Component {
    state = {
        events: [], 
    }; 
    componentDidMount() {
        fetch('https://rest.bandsintown.com/artists/metallica/events/?app_id=9c01aeb30cc359bf9d607def9ef7091a')
            .then((response) => (response.json()))
            .then((data) => {
                this.setState({
                    events: data
                })
            })
            .catch((err) => console.log(err))
    }; 

    render() {
        return(
            <section>
                {console.log(this.state.events)}
                <EventList events={this.state.events} />
            </section>
        )
    }
}; 

export default EventListContainer; 
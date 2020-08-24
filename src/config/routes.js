import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import Login from '../components/Auth/Login'; 
import Register from '../components/Auth/Register'; 
import EventListContainer from '../pages/EventListContainer/EventListContainer'
import UserProfile from '../components/UserProfile/UserProfile'

export default ({ setCurrentUser }) => (
    <Switch >
        <Route path='/register' component={Register} />
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} />
        <Route path='/events' component={EventListContainer} />
        <Route path='/user' component={UserProfile} />
    </Switch>
); 

    

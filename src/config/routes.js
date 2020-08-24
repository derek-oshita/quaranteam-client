import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import Login from '../components/Auth/Login'; 
import Register from '../components/Auth/Register'; 
import GameList from '../pages/EventListContainer/EventList'

export default () => (
    <Switch >
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
        <Route path='/events' component={GameList} />
    </Switch>
); 

    

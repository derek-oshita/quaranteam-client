import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import Login from '../components/Auth/Login'; 
import Register from '../components/Auth/Register'; 
import StateDataContainer from '../pages/StateDataContainer/StateDataContainer'
import UserProfile from '../components/UserProfile/UserProfile'

export default ({ setCurrentUser }) => (
    <Switch >
        <Route path='/register' component={Register} />
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} />
        <Route path='/states' component={StateDataContainer} />
        <Route path='/user' component={UserProfile} />
    </Switch>
); 

    

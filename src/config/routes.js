import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 
import Login from '../components/Auth/Login'; 
import Register from '../components/Auth/Register'; 

export default () => (
    <Switch >
        <Route path='/register' component={Register} />
        <Route path='/login' component={Login} />
    </Switch>
); 

    

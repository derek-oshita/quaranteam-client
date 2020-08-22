import React from 'react'; 
import { Switch, Route } from 'react-router-dom'; 

import Register from '../components/Auth/Register'; 

export default () => (
    <Route path='/register' component={Register} />
)

    

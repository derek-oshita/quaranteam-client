import React from 'react'; 
import { Switch, Route, Redirect } from 'react-router-dom'; 
import Login from '../components/Auth/Login'; 
import Register from '../components/Auth/Register'; 
import StateDataContainer from '../pages/StateDataContainer/StateDataContainer'; 
import StateContainer from '../pages/StateContainer/StateContainer'; 
import CommentContainer from '../pages/CommentContainer/CommentContainer'; 
import UserProfile from '../components/UserProfile/UserProfile'; 

export default ({ setCurrentUser, currentUser }) => (
    <Switch >
        <Route path='/register' component={Register} />
        <Route path='/login' render={() => <Login setCurrentUser={setCurrentUser} />} />
        {/* <Route path='/states/:state/comment' component={CommentContainer}  /> */}
        <Route path='/states/:state/comment' render={ (props) =>
            currentUser
            ? <CommentContainer {...props} currentUser={currentUser}/>
            : <Redirect to='/login' />
        } /> 
        <Route path='/states/:state' component={StateContainer} />
        <Route path='/states' component={StateDataContainer} />
        <Route path='/user' component={UserProfile} />
    </Switch>
); 

    

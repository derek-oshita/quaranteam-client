import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Home from "../components/Home/Home";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import StateDataContainer from "../pages/StateDataContainer/StateDataContainer";
import StateContainer from "../pages/StateContainer/StateContainer";
import CommentContainer from "../pages/CommentContainer/CommentContainer";
import EditComment from "../pages/EditComment/EditComment";
import GetComment from "../pages/GetComment/GetComment";
// import UserProfile from '../components/UserProfile/UserProfile';

export default ({ setCurrentUser, currentUser }) => (
  <Switch>
    {/* HOME */}
    <Route exact path="/" component={Home} />
    {/* REGISTER */}
    <Route path="/register" component={Register} />
    {/* LOGIN */}
    <Route
      path="/login"
      render={() => <Login setCurrentUser={setCurrentUser} />}
    />
    {/* EDIT COMMENT */}
    <Route
      path="/states/:state/comment/:id/edit"
      render={(props) =>
        currentUser ? (
          <EditComment {...props} currentUser={currentUser} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
    {/* GET COMMENT */}
    <Route
      exact
      path="/states/:state/comment/:id"
      render={(props) =>
        currentUser ? (
          <GetComment {...props} currentUser={currentUser} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
    {/* ADD COMMENT */}
    <Route
      exact
      path="/states/:state/comment"
      render={(props) =>
        currentUser ? (
          <CommentContainer {...props} currentUser={currentUser} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
    {/* STATES SHOW */}
    <Route
      exact
      path="/states/:state/"
      render={(props) =>
        currentUser ? (
          <StateContainer {...props} currentUser={currentUser} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
    {/* STATES INDEX */}
    <Route path="/states" component={StateDataContainer} />
    {/* PROFILE
            <Route path='/user' component={UserProfile} /> */}
  </Switch>
);

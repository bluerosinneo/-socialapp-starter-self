import React from "react";
import { Route, Switch } from "react-router-dom";
import Message from "./components/message/message";
import MessageForm from "./components/messageForm/MessageForm";
import Registration from "./components/registration/Registration";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Profile from "./pages/Profile";

import Message from "./components/message/message"
// import Profile from "./components/profile/Profile"

class App extends React.Component {
  render() {
    return (
      <Switch>
        <Route
            exact
            path="/"
            component={Home}
          />
          <Route
            exact
            path="/profile/:username"
            component={Profile}
          />
          <Route
            exact
            path="/message/:username"
            component={Message}
          />
          {/* <Route
            exact
            path="/profile"
            component={Profile}
          /> */}
          <Route
            exact
            path="/registration"
            component={Registration}
          />
          <Route
            exact
            path="/messageform"
            component={MessageForm}
          />
          <Route
            exact
            path="*"
            component={NotFound}
          />
          
      </Switch>
    );
  }
}

export default App;

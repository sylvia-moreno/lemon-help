import React, { Component } from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

import Homepage from "./components/auth/Homepage.js";
import Signup from "./components/auth/Signup.js";
import Login from "./components/auth/Login.js";
import Profile from "./components/auth/Profile.js";
import FormCookingService from "./components/form/form-service/form-cooking-service";

import Booking from "./components/booking/booking";
import LandingPage from "./components/landing-page/landing-page";

import authService from "./components/auth/auth-service.js";
import maidService from "./services/maids";

class App extends Component {
  state = {
    user: {},
    maids: [],
    preferencesUserService: {},
  };

  componentDidMount() {
    maidService
      .getMaid()
      .then(data => this.setState({ maids: data }))
      .catch(err => this.setState({ user: {} }));
  }

  fetchUser = () => {
    if (!this.state.user._id) {
      authService
        .loggedin()
        .then(data => this.setState({ user: data }))
        .catch(err => this.setState({ user: {} }));
    } else {
      console.log("user already in the state");
    }
  };

  updateUser = data => {
    this.setState({ user: data });
  };

  updateMaidsDisplayForServiceSelected = data => {
    this.setState({ maids: data });
  };

  savePreferencesService = data => {
    debugger
    this.setState({ preferencesUserService: data });
  }

  componentDidMount() {
    this.fetchUser();
  }

  render() {
    return (
      <Route
        render={props => (
          <div className="App" data-route={props.location.pathname}>
            {" "}
            {/* data-route="/" allow us to style pages */}
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <Homepage user={this.state.user} history={props.history} />
                )}
              />

              <Route
                exact
                path="/signup"
                render={props => (
                  <Signup
                    updateUser={this.updateUser}
                    history={props.history}
                  />
                )}
              />

              <Route
                exact
                path="/login"
                render={props => (
                  <Login updateUser={this.updateUser} history={props.history} />
                )}
              />

              <Route
                exact
                path="/profile"
                render={props => (
                  <Profile
                    user={this.state.user}
                    updateUser={this.updateUser}
                    history={props.history}
                  />
                )}
              />

              <Route
                exact
                path="/landing-page"
                render={props => (
                  <LandingPage
                    history={props.history}
                    updateUser={this.updateUser}
                    updateMaid={this.updateMaid}
                  />
                )}
              />

              <Route
                exact
                path="/cooking-service"
                render={props => (
                  <FormCookingService
                    history={props.history}
                    updateMaid={this.updateMaidsDisplayForServiceSelected}
                    savePreferencesService={this.savePreferencesService}
                  />
                )}
              />

              <Route
                exact
                path="/booking"
                render={props => (
                  <Booking
                    history={props.history}
                    maids={this.state.maids}
                    preferencesUserService={this.state.preferencesUserService}
                  />
                )}
              />

              {/* last route, ie: 404 */}
              <Route render={() => <h1>Not Found</h1>} />
            </Switch>
            {/*
          <LandingPage />
          <RatedProfil />

          <ListServiceItem serviceValue={'CLEANING'} serviceName={'Nettoyer'} />
          */}
          </div>
        )}
      />
    );
  }
}

export default App;

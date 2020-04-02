import React, { Component } from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

import Homepage from "./components/auth/Homepage.js";
import Signup from "./components/auth/Signup.js";
import Login from "./components/auth/Login.js";
import Profile from "./components/auth/Profile.js";
import FormCookingService from "./components/form/form-service/form-cooking-service";
import Booking from "./components/booking/booking";
import BookingConfirmation from "./components/booking/booking-confirmation";
import Payment from "./components/payment/payment";
import LandingPage from "./components/landing-page/landing-page";

import authService from "./components/auth/auth-service.js";
import maidService from "./services/maids";

class App extends Component {
  state = {
    user: {},
    maids: [],
    selectedService: {},
    selectedMaid: {}
  };

  componentDidMount() {
    maidService
      .getMaid()
      .then(data => this.setState({ maids: data }))
      .catch(err => this.setState({ user: {} }));
  }

  fetchUser = () => {
    if (!this.state.user._id) {
      debugger;
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

  updateSelectedService = data => {
    debugger;
    this.setState({ selectedService: data });
  };

  updateSelectedMaid = data => {
    debugger;
    this.setState({ selectedMaid: data });
  };

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
                  <LandingPage history={props.history} user={this.state.user} />
                )}
              />

              <Route
                exact
                path="/cooking-service"
                render={props => (
                  <FormCookingService
                    history={props.history}
                    updateMaid={this.updateMaidsDisplayForServiceSelected}
                    selectedService={this.updateSelectedService}
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
                    selectedService={this.state.selectedService}
                    selectedMaid={this.updateSelectedMaid}
                  />
                )}
              />

              <Route
                exact
                path="/booking-confirmation"
                render={props => (
                  <BookingConfirmation
                    history={props.history}
                    selectedService={this.state.selectedService}
                    selectedMaid={this.state.selectedMaid}
                    user={this.state.user}
                  />
                )}
              />

              <Route
                exact
                path="/payment"
                render={props => (
                  <Payment
                    history={props.history}
                    selectedService={this.state.selectedService}
                    selectedMaid={this.state.selectedMaid}
                    user={this.state.user}
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

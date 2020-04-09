import React, { Component } from "react";
import "./App.scss";

import { Switch, Route } from "react-router-dom";

import NavTop from "./components/nav-top/nav-top";
import NavBar from "./components/nav-bar/nav-bar";

import Homepage from "./components/auth/Homepage.js";
import Signup from "./components/auth/Signup.js";
import SignupMaid from "./components/auth/SignupMaid.js";
import Login from "./components/auth/Login.js";
import LoginMaid from "./components/auth/LoginMaid.js";

import Profile from "./components/auth/Profile.js";
import ProfileMaid from "./components/auth/ProfileMaid.js";

import FormCookingService from "./components/form/form-service/form-cooking-service";

import Booking from "./components/booking/booking";
import BookingConfirmation from "./components/booking/booking-confirmation";
import BookingList from "./components/booking/booking-list";

import Payment from "./components/payment/payment";
import PaymentSucess from "./components/payment-success/payment-success";

import authService from "./components/auth/auth-service.js";
import maidService from "./services/maids";
import NotFound from "./components/not-found/not-found";

class App extends Component {
  constructor(props) {
    super(props);

  }
  state = {
    user: {},
    maids: [], //liste des maids quand un user est loggué
    maidLogged: {}, //lorsqu'un maid se loggue
    selectedService: {}, //service selectionné
    selectedMaid: {}, // maid sélectionné
    currentPageName: "LemonMaid"
  };

  fetchUser = () => {
    if (!this.state.user._id) {
      authService
        .loggedin()
        .then(data => {
          this.setState({ user: data.user });
        })
        .catch(err => this.setState({ user: false }));
    } else {
      console.log("user already in the state");
    }
  };

  fetchMaid = () => {
    if (!!this.state.maid && !this.state.maid._id) {
      maidService
        .loggedinMaid()
        .then(data => this.setState({ maidLogged: data }))
        .catch(err => this.setState({ maidLogged: false }));
    } else {
      console.log("maid already in the state");
    }
  };

  fetchGetMaid = () => {
    maidService
      .getMaid()
      .then(data => this.setState({ maids: data }))
      .catch(err => this.setState({ user: {} }));
  };

  updateUser = data => {
    this.setState({ user: data });
  };

  updateMaid = data => {
    this.setState({ maidLogged: data });
  };

  updateMaidsDisplayForServiceSelected = data => {
    this.setState({ maids: data });
  };

  updateSelectedService = data => {
    this.setState({ selectedService: data });
  };

  updateSelectedMaid = data => {
    this.setState({ selectedMaid: data });
  };

  getCurrentPageName = currentPageName => {
    this.setState({ currentPageName });
  };

  componentDidMount() {
    this.fetchUser();
    this.fetchMaid();
    this.fetchGetMaid();
  }

  render() {
    return (
      <Route
        render={props => (
          <div className="App" data-route={props.location.pathname}>
            {" "}
            {/* data-route="/" allow us to style pages */}
            <NavTop
              currentPageName={this.state.currentPageName}
              history={props.history}
            />
            <NavBar history={props.history} />
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
                path="/signup-maid"
                render={props => (
                  <SignupMaid
                    updateMaid={this.updateMaid}
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
                path="/login-maid"
                render={props => (
                  <LoginMaid
                    updateMaid={this.updateMaid}
                    history={props.history}
                  />
                )}
              />

              <Route
                exact
                path="/profil-maid/:id"
                render={props => (
                  <ProfileMaid
                    maids={this.state.maids}
                    updateMaid={this.updateMaid}
                    history={props.history}
                    match={props.match}
                    currentPageName={this.getCurrentPageName}
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
                    selectedService={this.updateSelectedService}
                    user={this.state.user}
                    currentPageName={this.getCurrentPageName}
                  />
                )}
              />

              <Route
                exact
                path="/booking"
                render={props => (
                  <Booking
                    history={props.history}
                    match={props.match}
                    maids={this.state.maids}
                    selectedService={this.state.selectedService}
                    selectedMaid={this.updateSelectedMaid}
                    currentPageName={this.getCurrentPageName}
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
                    currentPageName={this.getCurrentPageName}
                  />
                )}
              />

              <Route
                exact
                path="/payment-success"
                render={props => <PaymentSucess />}
              />

              <Route
                exact
                path="/booking-list"
                render={props => (
                  <BookingList
                    history={props.history}
                    selectedService={this.state.selectedService}
                    selectedMaid={this.state.selectedMaid}
                    user={this.state.user}
                    currentPageName={this.getCurrentPageName}
                  />
                )}
              />

              {/* last route, ie: 404 */}
              <Route
                render={() => (
                  <NotFound
                    history={props.history}
                    currentPageName={this.getCurrentPageName}
                  />
                )}
              />
            </Switch>
            {/*
          <LandingPage />
          

          <ListServiceItem serviceValue={'CLEANING'} serviceName={'Nettoyer'} />
          */}
          </div>
        )}
      />
    );
  }
}

export default App;

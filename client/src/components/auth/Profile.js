import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";

import authService from "./auth-service.js";
import userService from "../../services/user";

const Profile = props => {
  let { userID } = props.match.params;
  useEffect(() => {
    userService.getProfil(props.user._id).then(response => {
    });
  }, []);

  const logout = event => {
    authService.logout().then(response => {
      props.updateUser(false);
    });
  };
  return <div className="profile">ok</div>;
};

export default Profile;

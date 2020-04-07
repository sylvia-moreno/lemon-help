import React, { useEffect } from "react";


import maidService from "../../services/maids";

const ProfileMaid = (props) => {
 
  useEffect(() => {
    props.currentPageName("Profile");
  }, []);

  const getProject = (id) => {
    return props.maids.find(project => project.id === id)
  };

  const maid = getProject(props.match.params.id);


  const logout = event => {
    maidService.logout().then(response => {
      this.props.updateMaid(false);
    });
  };

  return (
    <div className="profile wrapper">
      Nom: {maid.username}
    </div>
  )
};

export default ProfileMaid;
{/* 
export default class extends React.Component {
  

  render() {
    return (
      <>
        {!this.props.user._id ? (
          <Redirect to="/signup" />
        ) : (
          <>
            <div className="profile wrapper">
              <div className="profile-card">
                {!!this.props.user.imageprofile && (
                  <div className="profile-card--img">
                    <img
                      src={this.props.user.imageprofile}
                      alt="photo utilisateur"
                    />
                  </div>
                )}
                <div className="profile-card--info">
                  <p>{this.props.user.username}</p>
                </div>
                <div className="profile-card--cta">
                  <div className="profile-card--cta-btn">
                    <Link to="/edit-profile">Editer</Link>
                  </div>
                </div>
              </div>

              <h1>profilee</h1>

              <p>
                <em>Username</em>
                <span>{this.props.user.username}</span>
              </p>
              <p>
                <em>Campus</em>
                <span>{this.props.user.campus}</span>
              </p>
              <p>
                <em>Course</em>
                <span>{this.props.user.course}</span>
              </p>

              <div className="cta">
                <button className="btn logout" onClick={this.logout}>
                  Logout
                </button>
              </div>

              <img
                className="avatar"
                src="https://material.io/tools/icons/static/icons/baseline-person-24px.svg"
              />

              <p>
                <small>
                  The user is able to upload a new profilee photo, using NodeJS
                  and Multer uploader.
                </small>
              </p>
            </div>
          </>
        )}
      </>
    );
  }
}
*/}
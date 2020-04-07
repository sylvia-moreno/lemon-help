import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';


const LandingPage = ({history, user}) => {
  
  useEffect(() => {
    if(!Object.entries(user).length === 0) {
      
      history.push('/')
    }
    
  }, []);

    return (
        <div className="landing-page">
            <div className="app-home">
            <div className="app-home--wrapper">
              <div className="app-home--illustration">
                <img src="../illustration 19.png" alt="illustration home" />
              </div>
              <h1 className="app-home--logo">
                <span className="logo-part-1">Lemon</span>
                <span className="logo-part-2">Maid</span>
              </h1>
              <div className="app-home--cta">
                <Link className="btn-cta" to="/signup">Sign up</Link>
                <Link className="btn-cta" to="/login">Log in</Link>
              </div>
            </div>
          </div>
        </div>
    )
};

export default LandingPage;
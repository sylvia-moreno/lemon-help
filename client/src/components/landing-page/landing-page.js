import React, { useEffect, useState } from 'react';
import maidService from '../../services/maids';
         
import RatedProfil  from '../rated-profil/rated-profil';


const LandingPage = ({user, maids, history}) => {
    debugger
    const [maid, setMaid] = useState();
    useEffect(() => {
        maidService.getMaid()
        .then(data => this.setState({maids: data}))
        .catch(err => this.setState({maids: {}}))
      ;
    })
    
    return (
        <div className="landing-page">
            <div className="landing-page--top-profil">
                <h2>Les LemonMaids les mieux notés</h2>
                <RatedProfil stars={1} img={''} name={''} />
            </div>
            


        </div>
    )
};

export default LandingPage;
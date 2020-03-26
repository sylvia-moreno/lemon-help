import React from 'react';
import PhotoProfil from '../photo-profil/photo-profil';
import Rating from '../rating/rating';

import './rated-profil.scss';

const RatedProfil = ({stars, img, name}) => {
    return (
        <div className="rated-profil">
            <PhotoProfil img={img} name={name} />
            <Rating stars={stars} />
        </div>
    )
};

export default RatedProfil;
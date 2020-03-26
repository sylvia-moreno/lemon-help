import React from 'react';

import './photo-profil.scss';

const PhotoProfil = ({img, name}) => {
    return (
        <div className="photo-profil">
            <div className="photo-profil--img">
                <span className="image"><img className="cover" src={img} alt="image de profil" /></span>
            </div>
            <div className="photo-profil--name">
                <span className="name">{name}</span>
            </div>
        </div>
    )
};

export default PhotoProfil;
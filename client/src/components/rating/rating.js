import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStarHalf } from '@fortawesome/free-solid-svg-icons';

import './rating.scss';

const Rating = ({stars}) => {
    const ratedStars = 5;
    return (
        <ul className="rating">
            {[...Array(ratedStars)].map((el, i) => 
                    <li className={(i < stars) ? 'full': 'empty'}><FontAwesomeIcon icon={faStar} /></li>
                    
                
            )} 
            
        </ul>
    )
}


export default Rating;
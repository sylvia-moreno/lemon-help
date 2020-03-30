import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLemon } from '@fortawesome/free-solid-svg-icons';

import './rating.scss';

const Rating = ({stars}) => {
    const ratedStars = 5;
    return (
        <ul className="rating">
            {[...Array(ratedStars)].map((el, i) => 
                    <li className={(i < stars) ? 'full': 'empty'}><FontAwesomeIcon icon={faLemon} /></li>
                    
                
            )} 
            
        </ul>
    )
}


export default Rating;
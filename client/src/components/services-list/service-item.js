import React from 'react';
import {useState, useCallback} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCookieBite } from '@fortawesome/free-solid-svg-icons';
import { faBroom } from '@fortawesome/free-solid-svg-icons';
import { faBaby} from '@fortawesome/free-solid-svg-icons';

import './service-item.scss';

const icons = {
    COOKING: faCookieBite,
    CLEANING: faBroom,
    BABYSITTING: faBaby,
}

const ServiceItem = ({serviceValue, serviceName, hasChecked}) => {
    
    const [isChecked, setIsChecked] = useState(false);
    
    const handledChange = useCallback(
        e => {
            if(e.target.checked) {
                e.target.checked ? setIsChecked(true) : setIsChecked(false);
                hasChecked(e.target.checked, serviceValue);
            }
        },
        []
    );

    return (
        <div className={isChecked ? 'list-service-item list-service-item--checked' : 'list-service-item'}>
            <label className="list-service-item--content">
                <div className="list-service-item--icon">
                    <FontAwesomeIcon icon={icons[serviceValue]} />
                    <span className="list-service-item--icon-label">{serviceName}</span>
                </div>
                <input type="checkbox" className="list-service-item--checkbox" onChange={handledChange} />
            </label>
        </div>
    )
};

export default ServiceItem;
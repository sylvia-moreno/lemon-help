import React from 'react';

import AccordionItem from './accordion-item';

const Accordion = ({data}) => {
  return (
    <div className="accordion">
      <ul className="accordion-list">
        {data.map((elt, index) => {
          return (
            <li className="accordion-list--item" key ={index}>
              <AccordionItem {...elt} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Accordion;

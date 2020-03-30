import React, { useState } from "react";

const AccordionItem = ({ props }) => {
  const [opened, setOpened] = useState(false);

  const onClick = () => {
    setOpened(!opened);
  };

  const className = `accordion-item ${opened && "accordion-item--opened"}`;
  return (
    <div className={className} onClick={onClick}>
      <div className="accordion-item--line">
        <h3 className="accordion-item--title">{props.title}</h3>
        <span className="accordion-item--icon" />
      </div>
      <div className="accordion-item--inner">
        <div className="accordion-item--content">
          <p className="accordion-item--paragraph">{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default AccordionItem;

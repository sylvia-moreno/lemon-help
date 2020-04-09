import React, { useEffect, useState } from "react";

import IconNotFound from "../icons/icon-not-found";
import "./not-found.scss";

const NotFound = ({ history, currentPageName  }) => {
  const [isVisible, setIsVisible] = useState(true);
  const urlLocation = history.location.pathname;

  useEffect(() => {
    currentPageName("404");
  }, []);


  return (
    <div className="not-found">
      <div className="alignCenter">
        <p className="not-found--title">
          On dit "qui cherche trouve" mais ici il n'y a rien
        </p>
        <div className="not-found--icon">
          <IconNotFound />
        </div>
        <a href="/" className="btn-cta">
          Retour à la page d'accueil
        </a>
      </div>
    </div>
  );
};
export default NotFound;

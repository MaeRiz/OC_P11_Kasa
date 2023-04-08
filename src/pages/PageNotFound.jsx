import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Kasa - Page introuvable";
  }, []);

  return (
    <div>
      <div className="container-pagenotfound">
        <h1>404</h1>
        <h2>Oups! La page que vous demandez n'existe pas.</h2>
        <NavLink to={"/"}>
          <p>Retourner sur la page d'accueil</p>
        </NavLink>
      </div>
    </div>
  );
};

export default PageNotFound;

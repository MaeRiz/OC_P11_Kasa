import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  useEffect(() => {
    document.title = "Kasa - Page introuvable";
  }, []);

  return (
    <div className="container-pagenotfound">
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n'existe pas.</h2>
      <Link to={"/"}>
        <p>Retourner sur la page d'accueil</p>
      </Link>
    </div>
  );
};

export default PageNotFound;

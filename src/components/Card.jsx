import React from "react";
import { Link } from "react-router-dom";

const Card = ({ lodge }) => {
  return (
    <Link to={`/lodgement/${lodge.id}`}>
      <div className="card">
        <p>{lodge.title}</p>
        <img src={lodge.cover} alt={lodge.title} />
      </div>
    </Link>
  );
};

export default Card;

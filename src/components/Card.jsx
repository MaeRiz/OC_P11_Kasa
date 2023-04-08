import React from "react";

const Card = ({ lodge }) => {
  return (
    <div className="card">
      <p>{lodge.title}</p>
      <img src={lodge.cover} alt={lodge.title} />
    </div>
  );
};

export default Card;

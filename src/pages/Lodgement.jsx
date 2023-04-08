import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Lodgement = () => {
  let { lodgeId } = useParams();

  useEffect(() => {
    document.title = "Kasa - Lodgement";
  }, []);

  return (
    <div>
      <h3>{lodgeId}</h3>
    </div>
  );
};

export default Lodgement;

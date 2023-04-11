import React, { useState } from "react";

const DropDown = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div className={`dropdown ${open ? "open" : "close"}`}>
      <div className="dropdown-button" onClick={(e) => handleOpen()}>
        <p>{title}</p>
        <p className="arrow">❯</p>
      </div>
      <div className="dropdown-content">
        <ul>
          {description.map((item, index) => (
            <li key={`dd_desc_${index}`}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDown;

import React from "react";

const Rating = ({ rate }) => {
  const range = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {range.map((rangeItem) =>
        rate >= rangeItem ? (
          <i className="red fa-solid fa-star"></i>
        ) : (
          <i className="fa-solid fa-star"></i>
        )
      )}
    </div>
  );
};

export default Rating;

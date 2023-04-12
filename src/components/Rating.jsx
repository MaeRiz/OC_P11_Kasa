import React from "react";

const Rating = ({ rate }) => {
  const range = [1, 2, 3, 4, 5];
  return (
    <div className="rating">
      {range.map((rangeItem, index) =>
        rate >= rangeItem ? (
          <i key={"rating_" + index} className="red fa-solid fa-star"></i>
        ) : (
          <i key={"rating_" + index} className="fa-solid fa-star"></i>
        )
      )}
    </div>
  );
};

export default Rating;

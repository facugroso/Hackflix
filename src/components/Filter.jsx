import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Filter({ setRating }) {
  const handleRating = (rate) => {
    console.log(rate);
    setRating(rate);
  };

  return (
    <div className="text-center my-3">
      <Rating onClick={handleRating} />
    </div>
  );
}

export default Filter;

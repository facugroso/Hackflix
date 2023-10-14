import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Filter({ setRating }) {
  const handleRating = (rate) => {
    console.log(rate);
    setRating(rate);
  };

  return (
    <div className="my-3 d-flex  justify-content-center align-items-center">
      <h5>Filer by rating: </h5>
      <Rating onClick={handleRating} />
    </div>
  );
}

export default Filter;

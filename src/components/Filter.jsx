import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function Filter({ setRating }) {
  const handleRating = (rate) => {
    console.log(rate);
    setRating(rate);
  };

  return (
    <div className="my-3 d-flex  justify-content-center align-items-center">
      <h2>Filter by rating:</h2>{" "}
      <h2>
        <Rating onClick={handleRating} />
      </h2>
    </div>
  );
}

export default Filter;

import React, { useState } from "react";
import MovieModal from "./MovieModal";

function Movie({ movie }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);

  return (
    <div className="py-2">
      <img
        onClick={() => setShow(true)}
        className="img-fluid"
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieModal show={show} handleClose={handleClose} movie={movie} />
    </div>
  );
}

export default Movie;

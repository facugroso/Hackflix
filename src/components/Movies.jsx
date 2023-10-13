import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import "./Movies.css";

function Movies({ rating }) {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setPage(1);
    const getMovie = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=e2c830b19d16fcf0fe8003ef0612f9f8&vote_average.gte=${
          rating * 2 - 2
        }`
      );
      //guardo las peliculas en nuestro estado con el setMovies
      setMovies(response.data.results);
    };
    getMovie();
  }, [rating]);

  useEffect(() => {
    const getMovies = async () => {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=e2c830b19d16fcf0fe8003ef0612f9f8&page=${page}$vote_average.gte=${
          rating * 2 - 2
        }`
      );
      setMovies([...movies, ...response.data.results]);
    };
    page > 1 && getMovies();
  }, [page]);

  return (
    movies.length > 0 && (
      <div className="container">
        <InfiniteScroll
          dataLength={movies.length}
          next={() => setPage((prevPage) => prevPage + 1)}
          hasMore={true}
          loader={<h4>Loading...</h4>}
        >
          <div className="row">
            {movies.map((movie) => (
              <div key={movie.id} className="col-6 col-sm-4 col-lg-2 ">
                <Movie movie={movie} />
              </div>
            ))}
          </div>
        </InfiniteScroll>
      </div>
    )
  );
}

export default Movies;

import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import MovieItems from "../MovieItems/MovieItems";
import "./MovieList.css";

function MovieList() {
  const history = useHistory();
  const dispatch = useDispatch();
  const movies = useSelector((store) => store.movies);

  useEffect(() => {
    dispatch({ type: "FETCH_MOVIES" });
  }, []);

  return (
    <main>
      <h1>Movies</h1>
      <section className="movies">
        {movies.map((movie) => {
          return <MovieItems key={movie.id} movie={movie} />;
        })}
      </section>
    </main>
  );
}

export default MovieList;

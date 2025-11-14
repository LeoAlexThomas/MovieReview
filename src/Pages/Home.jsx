import React from "react";
import { useMovieContext } from "../Context/MovieContext";
import MovieFilters from "../Components/MovieFilters";
import MovieList from "../Components/MovieList";

const Home = () => {
  return (
    <div className="bg-accent">
      <MovieFilters />
      <MovieList />
    </div>
  );
};

export default Home;

import React from "react";
import MovieFilters from "../Components/MovieFilters";
import MovieList from "../Components/MovieList";

const Home = () => {
  return (
    <div>
      <MovieFilters />
      <MovieList />
    </div>
  );
};

export default Home;

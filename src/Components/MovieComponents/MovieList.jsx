import React, { Fragment, useEffect } from "react";
import { useMovieContext } from "../../Context/MovieContext";
import useApiCall from "../../Hooks/useApiCall";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";
import EmptyMessage from "../EmptyMessage";
import MovieCard from "../MovieComponents/MovieCard";
import Pagination from "../Pagination";

const MovieList = () => {
  const { search, year, genre, pageNumber } = useMovieContext();
  const { item, isLoading, error } = useApiCall({
    url: `https://api.themoviedb.org/3/${
      search.length === 0 ? "discover" : "search"
    }/movie?page=${pageNumber}${search.length === 0 ? "" : `&query=${search}`}${
      year.length === 0 ? "" : `&year=${year}`
    }${genre.length === 0 ? "" : `&with_genres=${genre}`}`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [item]);

  if (error) {
    return (
      <ErrorMessage
        message={error.response?.data?.message ?? "Something went wrong"}
        showFullScreen={true}
      />
    );
  }

  if (isLoading) {
    return <Loading showFullScreen={true} />;
  }

  if (item === null || item.total_results === 0) {
    return <EmptyMessage message="Movies not found" showFullScreen={true} />;
  }

  return (
    <>
      <div className="flex flex-wrap gap-8 items-start justify-center">
        {item.results.map((mov) => {
          return (
            <Fragment key={mov.id}>
              <MovieCard movie={mov} />
            </Fragment>
          );
        })}
      </div>
      <Pagination totalPages={item.total_pages} />
    </>
  );
};

export default MovieList;

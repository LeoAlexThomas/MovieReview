import React, { Fragment, useEffect } from "react";
import { useLocation } from "react-router-dom";
import useApiCall from "../Hooks/useApiCall";
import ErrorMessage from "../Components/ErrorMessage";
import Loading from "../Components/Loading";
import EmptyMessage from "../Components/EmptyMessage";
import CrewCard from "../Components/CrewCard";
import { FaCalendarAlt } from "react-icons/fa";

const MovieDetails = () => {
  const location = useLocation();
  const movieId = location.pathname.split("/").pop();

  const { item, isLoading, error } = useApiCall({
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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

  if (item === null) {
    return <EmptyMessage message="Movie not found" />;
  }

  return (
    <div className="flex flex-col justify-center">
      <div className="h-[550px] 2xl:h-[750px] overflow-hidden self-stretch bg-secondary">
        {item.backdrop_path === null ? (
          <img
            src="https://www.shutterstock.com/image-vector/film-clapper-3d-cartoon-icon-600nw-2239181291.jpg"
            className="object-cover h-full w-full overflow-hidden "
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/original/${item.backdrop_path}`}
            className="object-cover h-full w-full overflow-hidden"
          />
        )}
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <div className="flex gap-4 items-center my-4">
          <div>
            <h2 className="font-Title text-3xl font-bold">{item.title}</h2>
            {item.tagline !== null && (
              <p className="font-SubTitle text-base font-medium text-gray-400">
                {item.tagline}
              </p>
            )}
          </div>
        </div>
        {item.genres.length !== 0 && (
          <ul className="flex gap-4 flex-wrap mb-8">
            {item.genres.map((ge) => {
              return (
                <li
                  key={ge.id}
                  className="text-xs font-medium bg-accent px-4 py-2 rounded-full"
                >
                  {ge.name}
                </li>
              );
            })}
          </ul>
        )}
        <div className="mb-8 ">
          <h3 className="text-2xl font-bold mb-4">About the movie</h3>
          <p className="text-base text-justify md:text-start">
            {item.overview}
          </p>
        </div>
        <div className="mb-8 flex flex-col gap-4 items-start">
          <h3 className="text-2xl font-bold">Languages: </h3>
          <p className="text-base ">
            {item.spoken_languages.map((lang) => lang.english_name).join(", ")}
          </p>
        </div>
        <div className="mb-8">
          <h3 className="text-2xl font-bold mb-4">Crew: </h3>
          <div className="flex flex-wrap gap-4 mt-4 items-center justify-center md:justify-self-start">
            {item.production_companies.map((crew) => {
              return (
                <Fragment key={crew.id}>
                  <CrewCard crew={crew} />
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

import React from "react";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/movieDetails/${movie.id}`);
  };
  return (
    <div className="w-full sm:w-64  flex flex-col gap-2">
      <div
        className="h-[450px] sm:h-80 overflow-hidden rounded-lg self-center cursor-pointer "
        onClick={handleCardClick}
      >
        {movie.poster_path === null ? (
          <img
            src="https://www.shutterstock.com/image-vector/film-clapper-3d-cartoon-icon-600nw-2239181291.jpg"
            className="object-contain scale-100 md:hover:scale-110 h-full w-full overflow-hidden"
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
            className="object-contain scale-100 hover:scale-110 "
          />
        )}
      </div>
      <div>
        <h4 className="text-xl font-bold line-clamp-2">{movie.title}</h4>
        <p className="text-base text-gray-400">{movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieCard;

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StarRating from "./StarRating";
import find from "lodash/find";
import { getRatings } from "../utils/common";
import isNil from "lodash/isNil";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const [isRatingPresent, setIsRatingPresent] = useState(false);
  const handleCardClick = () => {
    navigate(`/movieDetails/${movie.id}`);
  };

  useEffect(() => {
    const localRatings = getRatings();
    const currentMovieRating = find(localRatings, (ele) => ele.id === movie.id);
    setIsRatingPresent(!isNil(currentMovieRating));
  }, []);

  return (
    <div className="w-full sm:w-64  flex flex-col gap-2">
      <div
        className="relative h-[450px] sm:h-80 overflow-hidden rounded-lg self-center cursor-pointer "
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
      <div className="flex gap-2 items-center">
        <StarRating isEnabled={false} initialRating={movie.vote_average / 2} />
        <p>({movie.vote_count + (isRatingPresent ? 1 : 0)})</p>
      </div>
    </div>
  );
};

export default MovieCard;

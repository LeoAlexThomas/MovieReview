import { useNavigate } from "react-router-dom";
import StarRating from "../StarRating";
import CommonImageViewer from "../CommonImageViewer";

const MovieCard = ({ movie }) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/movieDetails/${movie.id}`);
  };

  return (
    <div className="w-full sm:w-64  flex flex-col gap-2">
      <div
        className="relative h-[450px] sm:h-80 overflow-hidden rounded-lg self-center cursor-pointer "
        onClick={handleCardClick}
      >
        <CommonImageViewer
          imagePath={movie.poster_path}
          showHoverEffect={true}
        />
      </div>
      <div>
        <h4 className="text-xl font-bold line-clamp-2">{movie.title}</h4>
        <p className="text-base text-gray-400">{movie.release_date}</p>
      </div>
      <div className="flex gap-2 items-center">
        <StarRating isEnabled={false} initialRating={movie.vote_average / 2} />
        <p>({movie.vote_count})</p>
      </div>
    </div>
  );
};

export default MovieCard;

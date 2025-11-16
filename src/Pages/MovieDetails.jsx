import { Fragment, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import useApiCall from "../Hooks/useApiCall";
import ErrorMessage from "../Components/ErrorMessage";
import Loading from "../Components/Loading";
import EmptyMessage from "../Components/EmptyMessage";
import CrewCard from "../Components/MovieComponents/CrewCard";
import StarRating from "../Components/StarRating";
import find from "lodash/find";
import isEmpty from "lodash/isEmpty";
import isNil from "lodash/isNil";
import CustomToast from "../Components/CustomToast";
import { getRatings, updateRatings } from "../utils/common";
import CommonImageViewer from "../Components/CommonImageViewer";

const MovieDetails = () => {
  const location = useLocation();
  const movieId = location.pathname.split("/").pop();
  const [rating, setRating] = useState(null);

  // Toast Message state
  const [isMessageOpen, setIsMessageOpen] = useState(false);

  const handleMessageModelOpen = () => setIsMessageOpen(true);
  const handleMessageModelClose = () => setIsMessageOpen(false);

  const { item, isLoading, error } = useApiCall({
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
  });

  useEffect(() => {
    // Used to scroll to top of the page whenever user visit this page
    window.scrollTo(0, 0);
    // Below section is used to update rating count based on user rating which stored in localstorage
    const localRatings = getRatings();
    const currentRating = find(
      localRatings,
      (ele) => ele.id === Number(movieId)
    );
    if (isNil(currentRating)) {
      return;
    }
    setRating(currentRating.rating);
  }, []);

  const handleRatingChange = (val) => {
    const localRatings = getRatings();
    const currentRating = { id: item.id, rating: val };
    if (isNil(localRatings) || isEmpty(localRatings)) {
      // Creating the storage data for the first time
      updateRatings([currentRating]);
    } else {
      const storedRating = find(localRatings, (ele) => ele.id === item.id);
      // Adding corresponding data to first time
      if (isNil(storedRating)) {
        updateRatings([...localRatings, currentRating]);
      } else {
        // Updating existing data
        const ratingIndex = localRatings.indexOf(storedRating);
        localRatings.splice(ratingIndex, 1, currentRating);
        updateRatings(localRatings);
      }
    }
    handleMessageModelOpen();
    setRating(val);
  };

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
      {/* Rating success toast */}
      {isMessageOpen && (
        <CustomToast
          toastId="successMessage"
          message="Rating added successfully"
          onToastClose={handleMessageModelClose}
          isWarningToast={false}
        />
      )}
      <div className="h-[550px] 2xl:h-[750px] overflow-hidden self-stretch ">
        <CommonImageViewer imagePath={item.backdrop_path} />
      </div>
      <div className="w-full max-w-[1440px] mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center my-4">
          <div>
            <h2 className="font-Title text-3xl font-bold">{item.title}</h2>
            {item.tagline !== null && (
              <p className="font-SubTitle text-base font-medium text-gray-400">
                {item.tagline}
              </p>
            )}
          </div>
          <div>
            <p className="text-lg font-medium">
              {(item.vote_average / 2).toFixed(1)}&nbsp;
              <span className="text-sm font-normal">
                {/* NOTE: Updating rating count based on user rating from local storage */}
                {/* ({item.vote_count + (isNil(rating) ? 0 : 1)}){" "} */}(
                {item.vote_count})
              </span>
            </p>
            <StarRating initialRating={item.vote_average / 2} />
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
        {!isNil(item.overview) && !isEmpty(item.overview) && (
          <div className="mb-8 ">
            <h3 className="text-2xl font-bold mb-4">About the movie</h3>
            <p className="text-base text-justify md:text-start">
              {item.overview}
            </p>
            <p className="text-sm font-medium text-gray-400">
              Release Year: {item.release_date}
            </p>
          </div>
        )}
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
        <div className="mb-8">
          <div className="flex gap-4 mb-4 items-center">
            <h3 className="text-2xl font-bold">Your rating: </h3>
            <p className="text-sm text-gray-400">
              (NOTE: This rating is stored locally)
            </p>
          </div>
          <StarRating
            isEnabled={true}
            onStarSelect={handleRatingChange}
            initialRating={rating}
          />
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;

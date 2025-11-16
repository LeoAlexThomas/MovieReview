import React from "react";
import { useMovieContext } from "../../Context/MovieContext";
import useApiCall from "../../Hooks/useApiCall";
import ErrorMessage from "../ErrorMessage";
import Loading from "../Loading";
import SelectField from "../FormComponents/SelectField";
import range from "lodash/range";
import SearchBar from "../SearchBar";

const MovieFilters = () => {
  const { year, setYear } = useMovieContext();
  return (
    <div className="py-4 flex gap-4 flex-col lg:flex-row justify-between">
      <div className="block md:hidden">
        <SearchBar />
      </div>
      <div className=" flex gap-4 flex-col md:flex-row">
        <GenreFilter />
        {/* Year Input */}
        <SelectField
          id="year"
          value={year}
          onChange={setYear}
          label="Year:"
          options={[
            { label: "All Years", value: "" },
            ...range(1960, new Date().getFullYear() + 1).map((yr) => ({
              label: `${yr}`,
              value: yr,
            })),
          ]}
        />
      </div>
    </div>
  );
};

const GenreFilter = () => {
  const { genre, setGenre } = useMovieContext();
  const { item, isLoading, error } = useApiCall({
    url: "https://api.themoviedb.org/3/genre/movie/list?language=en",
  });

  if (error) {
    return (
      <ErrorMessage
        message={error.response?.data?.message ?? "Something went wrong"}
      />
    );
  }

  if (isLoading) {
    return <Loading />;
  }

  if (item == null || item.genres.length === 0) {
    return <></>;
  }

  return (
    <SelectField
      id="genre"
      label="Genre:"
      value={genre}
      onChange={setGenre}
      options={[
        { label: "All Genres", value: "" }, // For initial value
        ...item.genres.map((ge) => ({ label: ge.name, value: ge.id })),
      ]}
    />
  );
};

export default MovieFilters;

import { createContext, useContext, useEffect, useState } from "react";

const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [search, setSearch] = useState("");
  const [genre, setGenre] = useState("");
  const [year, setYear] = useState("");
  const [rating, setRating] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    console.log("Search: ", search);
    setPageNumber(1);
  }, [year, genre, search]);

  return (
    <MovieContext.Provider
      value={{
        search,
        setSearch,
        genre,
        setGenre,
        year,
        setYear,
        rating,
        setRating,
        pageNumber,
        setPageNumber,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

export const useMovieContext = () => useContext(MovieContext);

import { IoMdClose } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { useMovieContext } from "../Context/MovieContext";

const SearchBar = () => {
  const { search, setSearch } = useMovieContext();
  const handleClearSearch = () => {
    setSearch("");
  };

  return (
    <div className={`w-full max-w-full lg:max-w-[500px] relative `}>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Movies"
        name="movieSearch"
        type="text"
        className="border w-full bg-white rounded p-2 font-Body text-base text-black outline-none pl-12 pr-9"
      />
      <IoSearchSharp className="w-6 h-6 absolute top-1/2 -translate-1/2 left-6 text-primary" />
      {search.length !== 0 && (
        <IoMdClose
          className="w-6 h-6 absolute top-1/2 right-2 -translate-y-1/2 cursor-pointer"
          onClick={handleClearSearch}
        />
      )}
    </div>
  );
};

export default SearchBar;

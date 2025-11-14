import { IoMdClose } from "react-icons/io";
import InputField from "./FormComponents/InputField";
import { useMovieContext } from "../Context/MovieContext";

const SearchBar = () => {
  const { search, setSearch } = useMovieContext();

  const handleClearSearch = () => {
    setSearch("");
  };

  return (
    <div className="w-full max-w-full lg:max-w-[500px] relative">
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search Movies"
        name="movieSearch"
        type="text"
        className="border w-full bg-back rounded p-2 font-Body text-base text-black outline-none pr-20"
      />
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

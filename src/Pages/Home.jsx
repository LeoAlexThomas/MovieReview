import MovieFilters from "../Components/MovieFilters";
import MovieList from "../Components/MovieList";

const Home = () => {
  return (
    <div className="px-4 max-w-[1440px] mx-auto pb-8">
      <div className="flex flex-col md:flex-row item-center justify-between  my-6">
        <h3 className="text-2xl font-bold self-center">Movies</h3>
        <MovieFilters />
      </div>
      <MovieList />
    </div>
  );
};

export default Home;

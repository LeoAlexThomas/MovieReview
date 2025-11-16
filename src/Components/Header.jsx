import { useLocation, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <nav className="w-full bg-primary">
      <div className="h-16 w-full max-w-[1440px] mx-auto px-4 py-2 flex items-center justify-between">
        <div className="flex gap-2 items-center ">
          <img
            src="/images/logo.png"
            className="w-10 h-10 rounded-full cursor-pointer"
            onClick={handleLogoClick}
          />
          <h2
            className="font-Title text-2xl font-bold text-white cursor-pointer"
            onClick={handleLogoClick}
          >
            Movie
          </h2>
        </div>
        <div
          className={`${
            location.pathname === "/" ? "hidden md:block " : "hidden"
          }`}
        >
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Header;

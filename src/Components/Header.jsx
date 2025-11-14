import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <nav className="w-full bg-primary sticky top-0 z-30 ">
      <div className="h-16 max-w-[1440px] mx-auto px-4 py-2 flex gap-2 items-center ">
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
    </nav>
  );
};

export default Header;

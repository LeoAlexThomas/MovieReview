import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { useMovieContext } from "../Context/MovieContext";

const Pagination = ({ totalPages }) => {
  const { pageNumber, setPageNumber } = useMovieContext();

  const handlePageNext = () => {
    setPageNumber(pageNumber + 1);
  };
  const handlePagePrevious = () => setPageNumber(pageNumber - 1);

  return (
    <div className="flex flex-col gap-2 items-center justify-center self-center mt-10">
      <div className="flex gap-3 items-center">
        <IoIosArrowBack
          className={
            pageNumber === 1
              ? "text-black w-6 h-6 cursor-not-allowed"
              : "text-primary-text w-6 h-6 cursor-pointer"
          }
          onClick={handlePagePrevious}
        />
        <p className="text-base font-medium text-black">
          Pages: {pageNumber} of {totalPages}
        </p>
        <IoIosArrowForward
          className={
            pageNumber === totalPages
              ? "text-black w-6 h-6 cursor-not-allowed"
              : "text-primary-text w-6 h-6 cursor-pointer"
          }
          onClick={handlePageNext}
        />
      </div>
    </div>
  );
};

export default Pagination;

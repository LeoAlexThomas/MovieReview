import isNil from "lodash/isNil";
import React from "react";

const CommonImageViewer = ({ imagePath, showHoverEffect }) => {
  return (
    <img
      src={
        isNil(imagePath)
          ? "https://www.shutterstock.com/image-vector/film-clapper-3d-cartoon-icon-600nw-2239181291.jpg"
          : `https://image.tmdb.org/t/p/original/${imagePath}`
      }
      className={`object-cover h-full w-full overflow-hidden scale-100 ${
        showHoverEffect === true ? "hover:scale-110" : ""
      }`}
    />
  );
};

export default CommonImageViewer;

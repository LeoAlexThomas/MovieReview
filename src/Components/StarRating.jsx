import React from "react";
import Rating from "react-rating";
import { FaRegStar } from "react-icons/fa";
import { FaStar } from "react-icons/fa";

const StarRating = ({ initialRating, onStarSelect, isEnabled }) => {
  return (
    <div className="z-20">
      <Rating
        emptySymbol={<FaRegStar className="w-6 h-6 text-rating" />}
        fullSymbol={<FaStar className="w-6 h-6 text-rating" />}
        initialRating={initialRating}
        onChange={onStarSelect}
        readonly={!isEnabled}
      />
    </div>
  );
};

export default StarRating;

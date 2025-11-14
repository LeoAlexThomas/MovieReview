import React from "react";

const CrewCard = ({ crew }) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center max-w-28">
      <div className="w-20 h-20 overflow-hidden rounded-full self-center border-4 border-gray-50 shadow-md">
        {crew.logo_path === null ? (
          <img
            src="https://www.shutterstock.com/image-vector/film-clapper-3d-cartoon-icon-600nw-2239181291.jpg"
            className="object-contain h-full"
          />
        ) : (
          <img
            src={`https://image.tmdb.org/t/p/original/${crew.logo_path}`}
            className="object-contain h-full"
          />
        )}
      </div>
      <p className="font-SubTitle text-base font-bold text-center">
        {crew.name}
      </p>
    </div>
  );
};

export default CrewCard;

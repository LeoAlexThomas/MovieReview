import React from "react";
import CommonImageViewer from "./CommonImageViewer";

const CrewCard = ({ crew }) => {
  return (
    <div className="flex flex-col gap-3 items-center justify-center max-w-28">
      <div className="w-20 h-20 overflow-hidden rounded-full self-center border-4 border-gray-50 shadow-md">
        <CommonImageViewer imagePath={crew.logo_path} />
      </div>
      <p className="font-SubTitle text-base font-bold text-center">
        {crew.name}
      </p>
    </div>
  );
};

export default CrewCard;

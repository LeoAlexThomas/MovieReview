import React from "react";
import { PiWarningOctagonFill } from "react-icons/pi";

const PageNotFound = () => {
  return (
    <div className="h-screen flex items-center justify-center flex-col">
      <PiWarningOctagonFill className="w-20 h-20 text-error" />
      <p className="text-xl font-medium">Page not found</p>
    </div>
  );
};

export default PageNotFound;

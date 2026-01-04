import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-80">
      <div className="h-12 w-12 border-4 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
    </div>
  );
};

export default Loader;
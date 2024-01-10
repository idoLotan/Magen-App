import React from "react";

const SearchSvg = () => {
  return (
    <div className="bg-red-600 flex items-center w-96 p-5 rounded-full ">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        style={{
          display: "block",
          fill: "none",
          height: "16px",
          width: "16px",
          stroke: "currentcolor",
          strokeWidth: 4,
          overflow: "visible",
        }}
      >
        <path
          fill="none"
          d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9"
        ></path>
      </svg>
    </div>
  );
};

export default SearchSvg;

import React from "react";

const DocumentIcon = ({ color, size, title, className }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth="0"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      height={size ? size : "1rem"}
      width={size ? size : "1rem"}
      style={{ color }}
      className={className ? className : ""}
    >
      <path
        fill={color}
        d="M12 8V2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V10h-6a2 2 0 0 1-2-2Zm-3.75 3.5h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5Zm0 2.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5Zm0 2.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5Zm5.25-9V2.5l6 6H14a.5.5 0 0 1-.5-.5Z"
      />
    </svg>
  );
};

export default DocumentIcon;

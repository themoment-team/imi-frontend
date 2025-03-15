import React from 'react';

const ImiLogo = ({ width, height }: { width: string; height: string }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 130 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.918 84.912V18.643"
        stroke="black"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle
        cx="6"
        cy="5.022"
        r="5"
        transform="rotate(-90 6 5.022)"
        fill="black"
      />
      <path
        d="M28 84.912s-4.5-56.186 0-70.08c4.5-13.894 30.948 33.568 37.43 33.48 6.483-.088 32.977-45.889 37.42-33.48 4.444 12.408 0 70.08 0 70.08"
        stroke="black"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <path
        d="M124.727 84.912V18.643"
        stroke="black"
        strokeWidth="10"
        strokeLinecap="round"
      />
      <circle
        cx="124.808"
        cy="5.022"
        r="5"
        transform="rotate(-90 124.808 5.022)"
        fill="black"
      />
    </svg>
  );
};

export default ImiLogo;

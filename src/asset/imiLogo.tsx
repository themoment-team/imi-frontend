import React from 'react';

export const ImiLogo = ({
  width,
  height,
}: {
  width: string;
  height: string;
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 130 86"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5.91809 84.9119L6 18.6428" stroke="black" stroke-width="10" />
      <circle
        cx="6"
        cy="5.02202"
        r="5"
        transform="rotate(-90 6 5.02202)"
        fill="black"
      />
      <path
        d="M27.9949 84.9119C27.9949 84.9119 23.5063 28.7264 27.9949 14.8318C32.4836 0.937291 58.9314 48.4001 65.4143 48.3123C71.8972 48.2245 98.3904 2.4239 102.834 14.8318C107.277 27.2398 102.834 84.9119 102.834 84.9119"
        stroke="black"
        stroke-width="10"
      />
      <path
        d="M124.727 84.9119L124.808 18.6428"
        stroke="black"
        stroke-width="10"
      />
      <circle
        cx="124.808"
        cy="5.02202"
        r="5"
        transform="rotate(-90 124.808 5.02202)"
        fill="black"
      />
    </svg>
  );
};

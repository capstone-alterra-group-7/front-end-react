import React, { useEffect } from "react";

const CarouselDetailKamar = ({ url, imageIndex, setImageIndex }) => {
  return (
    <div className="h-full w-full flex">
      <button
        onClick={() => setImageIndex((prev) => (prev - 1 < 0 ? url.length - 1 : prev - 1))}
        className="w-1/12 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
          <g transform="rotate(180 25 25)">
            <path
              fill="currentColor"
              d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
            />
            <path fill="currentColor" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z" />
            <path fill="currentColor" d="M16 24h17v2H16z" />
          </g>
        </svg>
      </button>

      <div className="duration-300 w-full flex justify-center">
        <img
          src={url?.length < 1 ? "" : URL.createObjectURL(url[imageIndex].imageFile)}
          alt=""
          className="h-[30rem] w-10/12 object-contain"
        />
      </div>

      <button
        onClick={() => setImageIndex((prev) => (prev + 1 < url.length ? prev + 1 : 0))}
        className="w-1/12 flex items-center justify-center"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 50 50">
          <path
            fill="currentColor"
            d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
          />
          <path fill="currentColor" d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z" />
          <path fill="currentColor" d="M16 24h17v2H16z" />
        </svg>
      </button>
    </div>
  );
};

export default CarouselDetailKamar;

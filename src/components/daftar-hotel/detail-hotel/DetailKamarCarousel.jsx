import React from "react";

const DetailKamarCarousel = ({ imgUrl, indexImg, setIndexImg, name }) => {
  return (
    <div className="text-white 2xl:h-96 xl:h-[19rem] h-72 flex justify-evenly w-full">
      {/* arrow left */}
      <button
        onClick={() =>
          setIndexImg((prev) => (prev - 1 < 0 ? imgUrl?.length - 1 : prev - 1))
        }
        className="w-1/12 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <g transform="rotate(180 25 25)">
            <path
              fill={`${name === "detail-main" ? "black" : "currentColor"}`}
              d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
            />
            <path
              fill={`${name === "detail-main" ? "black" : "currentColor"}`}
              d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
            />
            <path
              fill={`${name === "detail-main" ? "black" : "currentColor"}`}
              d="M16 24h17v2H16z"
            />
          </g>
        </svg>
      </button>

      <div className="duration-300 w-[35rem] flex justify-center">
        <img
          src={
            imgUrl === undefined
              ? ""
              : imgUrl === null
              ? ""
              : imgUrl[indexImg]?.image_url
          }
          alt=""
          className={`2xl:h-96 xl:h-[19rem] ${
            name === "detail-main" && name ? "w-full" : "w-[30rem]"
          } h-96 object-contain`}
        />
      </div>

      {/* arrow right */}
      <button
        onClick={() =>
          setIndexImg((prev) => (prev + 1 < imgUrl?.length ? prev + 1 : 0))
        }
        className="w-1/12 flex items-center justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 50 50"
        >
          <path
            fill={`${name === "detail-main" ? "black" : "currentColor"}`}
            d="M25 42c-9.4 0-17-7.6-17-17S15.6 8 25 8s17 7.6 17 17s-7.6 17-17 17zm0-32c-8.3 0-15 6.7-15 15s6.7 15 15 15s15-6.7 15-15s-6.7-15-15-15z"
          />
          <path
            fill={`${name === "detail-main" ? "black" : "currentColor"}`}
            d="m24.7 34.7l-1.4-1.4l8.3-8.3l-8.3-8.3l1.4-1.4l9.7 9.7z"
          />
          <path
            fill={`${name === "detail-main" ? "black" : "currentColor"}`}
            d="M16 24h17v2H16z"
          />
        </svg>
      </button>
    </div>
  );
};

export default DetailKamarCarousel;

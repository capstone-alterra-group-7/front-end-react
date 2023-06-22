import React from "react";
import assets from "../../../../assets/assets";

const CardUlasan = ({ data }) => {
  return (
    <div className="border border-[#E1E4EA] w-full p-6 rounded-2xl mb-4">
      <div className="flex justify-between">
        <div className="flex">
          <img
            src={data?.user_image === null ? "" : data?.user_image}
            alt="user.img"
            className="w-16 h-16 rounded-full border border-slate-300 inline"
          />
          <div className="ms-4 inline">
            <h1 className="font-semibold text-xl">{data?.username}</h1>
            <img src={assets.iconStarRating} alt="" className="inline mr-1" />
            <h1 className="font-semibold inline">{data?.rating}/5</h1>
          </div>
        </div>
        <h1 className="text-[#0080FF] font-semibold">
          {
            new Date(data?.created_at)
              .toLocaleTimeString("id", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })
              .split("pukul")[0]
          }
        </h1>
      </div>

      <div className="mt-4">
        <h1 className="font-semibold">{data?.review}</h1>
      </div>
    </div>
  );
};

export default CardUlasan;

import React from "react";
import assets from "../../../../assets/assets";

const CardUlasan = () => {
  return (
    <div className="border border-[#E1E4EA] w-full p-6 rounded-2xl mb-4">
      <div className="flex justify-between">
        <div className="flex">
          <img src={assets.imageProfile} alt="" className="w-16 h-16 rounded-full border border-slate-300 inline" />
          <div className="ms-4 inline">
            <h1 className="font-semibold text-xl">John Doer</h1>
            <img src={assets.iconStarRating} alt="" className="inline mr-1" />
            <h1 className="font-semibold inline">4/5</h1>
          </div>
        </div>
        <h1 className="text-[#0080FF] font-medium">10 Mei 2023</h1>
      </div>

      <div className="mt-4">
        <h1>lorem100 Lorem ipsum dolor sit, amet consectetur adipisicing elit. Enim quam voluptates modi culpa repellat ipsa amet animi dicta blanditiis deserunt velit facilis, in quisquam nam.</h1>
      </div>
    </div>
  );
};

export default CardUlasan;

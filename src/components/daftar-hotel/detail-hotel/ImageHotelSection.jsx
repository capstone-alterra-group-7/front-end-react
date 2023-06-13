import React from "react";

// ** import assets
import assets from "../../../assets/assets";

const ImageHotelSection = () => {
  return (
    <div className="h-[22rem] mr-8 cursor-pointer">
      <img src={assets.imageHotel} alt="" className="w-96" />
      <div className="mt-4 flex gap-2">
        <img src={assets.imageHotel} alt="" className="w-[3.75rem]" />
        <img src={assets.imageHotel} alt="" className="w-[3.75rem]" />
        <img src={assets.imageHotel} alt="" className="w-[3.75rem]" />
      </div>
    </div>
  );
};

export default ImageHotelSection;
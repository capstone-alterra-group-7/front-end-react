import React from "react";
import assets from "../../../../assets/assets";

const ImageKamarHotel = ({ setModal }) => {
  return (
    <div className="h-[22rem] w-64 cursor-pointer" onClick={() => setModal(true)}>
      <img src={assets.imageHotel} alt="" className="" />
      <div className="mt-4 grid grid-cols-3 gap-2">
        <img src={assets.imageHotel} alt="" className="" />
        <img src={assets.imageHotel} alt="" className="" />
        <img src={assets.imageHotel} alt="" className="" />
      </div>
    </div>
  );
};

export default ImageKamarHotel;

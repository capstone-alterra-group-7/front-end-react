import React from "react";
import assets from "../../../../assets/assets";

const ImageKamarHotel = ({ dataImage, setModal }) => {
  console.log(dataImage);

  return (
    <div
      className="h-[22rem] w-64 cursor-pointer"
      onClick={() => setModal(true)}
    >
      <img
        src={dataImage === null ? "" : dataImage[0]?.image_url}
        alt=""
        className=""
      />
      <div className="mt-4 grid grid-cols-3 gap-2">
        {dataImage?.slice(1, 4).map((x, idx) => (
          <div className="relative">
            <img
              src={x.image_url}
              alt=""
              className="h-16 w-16 object-cover rounded-2xl"
            />
            <div
              className={`h-16 w-16 rounded-2xl absolute top-0 opacity-80 text-white flex justify-center items-center ${
                idx === 2 ? "bg-gray-700" : ""
              } `}
            >
              {idx === 2 ? `+${dataImage?.length - 3}` : null}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageKamarHotel;

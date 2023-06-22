import React from "react";

const ImageKamarHotel = ({ dataImage, setModal }) => {
  return (
    <div className="w-64 cursor-pointer">
      <img src={dataImage === null ? "" : dataImage[0]?.image_url} alt="" className="" onClick={() => setModal(true)} />

      <div className="mt-4 grid grid-cols-3 gap-2">
        {dataImage?.slice(1, 4).map((x, idx) => (
          <div className="relative">
            <img src={x.image_url} alt="" className="h-16 w-16 object-cover rounded-2xl" onClick={() => setModal(true)} />
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

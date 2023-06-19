import React, { useState } from "react";
import ModalImageKamar from "./daftar-kamar/ModalImageKamar";

const ImageHotelSection = ({ dataImage }) => {
  const [modalDetailImage, setModalDetailImage] = useState(false);
  return (
    <div className="h-[22rem] mr-8 cursor-pointer">
      <img
        src={dataImage[0]?.image_url}
        alt=""
        className="w-[23rem] object-cover rounded-lg"
        onClick={() => setModalDetailImage(true)}
      />
      <div className="mt-4 grid grid-cols-4 gap-2">
        {dataImage?.slice(1, 5).map((x, idx) => (
          <div className="relative">
            <img
              src={x.image_url}
              alt=""
              className="w-[3.75rem] object-cover rounded-lg"
              onClick={() => setModalDetailImage(true)}
            />
            <div
              className={`w-[3.75rem] h-[3.75rem] rounded-lg absolute top-0 opacity-80 text-white flex justify-center items-center ${
                idx === 3 ? "bg-gray-700" : ""
              } `}
            >
              {idx === 3 ? `+${dataImage?.length - 4}` : null}
            </div>
          </div>
        ))}
      </div>
      {modalDetailImage && <ModalImageKamar setModal={setModalDetailImage} dataImage={dataImage} />}
    </div>
  );
};

export default ImageHotelSection;

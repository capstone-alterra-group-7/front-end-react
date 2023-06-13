import React, { useState } from "react";

// ** import component
import CardPenawaran from "./CardPenawaran";
import ImageKamarHotel from "./ImageKamarHotel";
import ModalImageKamar from "./ModalImageKamar";

// ** Import Other
import { useNavigate } from "react-router-dom";
import assets from "../../../../assets/assets";

const CardKamarHotel = ({ data }) => {
  console.log("Data detail kamar: ", data);
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail-hotel/detail-kamar`, {
      state: { data },
    });
  };

  const [modalDetailImage, setModalDetailImage] = useState(false);

  return (
    <div className="bg-white rounded-[48px] px-8 pt-8 pb-4 mb-8">
      <div className="mb-16">
        <div className="flex">
          {/* <img src={assets.imageHotel} alt="" className="w-96 h-[356px]" /> */}
          <ImageKamarHotel setModal={setModalDetailImage} />
          <div className="ms-8 w-full">
            <h1 className="text-[32px] font-bold mb-1">{data?.name}</h1>
            <h1 className="text-[#0080FF] text-xl font-semibold">#{data?.hotel_room_id}</h1>
            <h1 className="mt-4 mb-3 font-semibold">
              <img src={assets.iconRuler} alt="" className="inline mr-1" /> {data?.size_of_room} m<sup>2</sup>
            </h1>
            <h1 className="mb-8 leading-6">
              Total Kamar: <span className="font-semibold">{data?.quantity_of_room} Kamar</span>
            </h1>
            <h1 className="mb-8">{data?.description}</h1>
            <button className="p-3 border border-[#D2D7E0] w-full text-[#4B4C4E]" onClick={handleNavigate}>
              Lihat Detail Kamar
            </button>
          </div>
        </div>
      </div>

      <div>
        <h1 className="text-2xl font-bold mb-4">Penawaran</h1>
        <CardPenawaran />
        <CardPenawaran />
      </div>

      {modalDetailImage && <ModalImageKamar setModal={setModalDetailImage} />}
    </div>
  );
};

export default CardKamarHotel;

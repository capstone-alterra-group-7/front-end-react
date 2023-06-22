import React, { useState } from "react";

// ** import component
import CardPenawaran from "./CardPenawaran";
import ImageKamarHotel from "./ImageKamarHotel";
import ModalImageKamar from "./ModalImageKamar";

// ** Import Other
import { useNavigate } from "react-router-dom";
import { chooseIconFacility, rupiah } from "../../../../helpers/libs";
import assets from "../../../../assets/assets";

const CardKamarHotel = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/detail-hotel/detail-kamar/${data?.hotel_room_id}`);
  };

  const [modalDetailImage, setModalDetailImage] = useState(false);

  return (
    <div className="bg-white rounded-[48px] px-8 pt-8 pb-7 mb-8">
      <div className="mb-6">
        <div className="flex">
          {/* <img src={assets.imageHotel} alt="" className="w-96 h-[356px]" /> */}
          <ImageKamarHotel setModal={setModalDetailImage} dataImage={data?.hotel_room_image} />
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

      <div className="flex flex-col h-full">
        <div className="flex">
          <h1 className="px-2 py-1 bg-[#DBF8D3] text-[#45C521] rounded-lg mr-3 mb-3">-{data?.discount}%</h1>
          <h1 className="text-[#96989C] text-2xl line-through">{rupiah(data?.normal_price)}</h1>
        </div>

        <h1 className="text-5xl font-bold text-[#0080FF] mb-1">{rupiah(data?.discount_price)}</h1>
        <h1 className="text-[#96989C] text-xl mb-1">/ kamar / malam</h1>
        <h1 className="text-[#FF7300] text-xl mb-6">Termasuk Pajak</h1>
      </div>

      <div className="grid grid-cols-2 mt-5 mb-1 gap-6 w-1/3">
        {data?.hotel_room_facility?.slice(0, 5).map((data, idx) => {
          return (
            <div className="flex h-5" key={idx}>
              <img src={chooseIconFacility(data?.name)} alt="" />
              <h1 className="font-medium ms-3">{data?.name}</h1>
            </div>
          );
        })}
      </div>

      {modalDetailImage && <ModalImageKamar setModal={setModalDetailImage} dataImage={data?.hotel_room_image} />}
    </div>
  );
};

export default CardKamarHotel;

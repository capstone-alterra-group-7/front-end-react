import React, { useState } from "react";
import assets from "../../../../../assets/assets";
import CarouselDetailKamar from "./CarouselDetailKamar";
import ModalAvailableKamar from "../../../detail-hotel/daftar-kamar/detail-kamar/ModalAvailableKamar";
import SectionDescriptionKamar from "../../../detail-hotel/daftar-kamar/detail-kamar/SectionDescriptionKamar";
import SectionFasilitasKamar from "../../../detail-hotel/daftar-kamar/detail-kamar/SectionFasilitasKamar";

const DetailKamar = ({ data, setShowDetail }) => {
  const [imageIndex, setImageIndex] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [isHidden, setIsHidden] = useState({ desc: false, fasilitas: false });

  return (
    <div className="bg-[#FFFFFF] fixed overflow-y-auto h-full top-0 right-0 left-0 bottom-0">
      <div className="space-y-4 bg-white pt-7 pb-4 px-8">
        <h1 className="text-[34px] font-[700] text-[#262627]">Detail Kamar</h1>
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => {
            setShowDetail(false);
          }}
        >
          <img src={assets.iconKembaliDaftarKa} alt="back" />

          <h5 className="text-[#0080FF] text-[16px] mt-[1px]">Kembali</h5>
        </div>
      </div>

      <div className="p-6">
        <CarouselDetailKamar url={data?.hotel_room_image} imageIndex={imageIndex} setImageIndex={setImageIndex} />

        <div className="mt-8 flex">
          {data?.hotel_room_image?.map((data, idx) => (
            <img
              src={URL.createObjectURL(data?.imageFile)}
              alt=""
              className={`cursor-pointer mr-4 w-32 h-32 object-cover ${imageIndex === idx ? "border-4 border-[#0080FF]" : null}`}
              onClick={(e) => setImageIndex(idx)}
              key={idx}
            />
          ))}
        </div>

        <div className="mt-12">
          <h1 className="font-bold text-3xl mb-4">{data?.name}</h1>
          <div className="flex">
            <img src={assets.iconRuler} alt="" className="mr-2" />
            <h1 className="font-semibold">
              {data?.size_of_room} m<sup>2</sup>
            </h1>
          </div>

          <div className="mt-5 mb-8 flex items-center relative">
            <h1>
              Total Kamar : <span className="font-semibold">{data?.quantity_of_room} Kamar</span>
            </h1>
            <button
              className="ms-4 h-11 py-3 px-6 bg-[#0080FF] hover:bg-opacity-80 text-white rounded-lg"
              onClick={() => setShowModal((prev) => !prev)}
            >
              Lihat Ketersediaan Kamar
            </button>
            {showModal ? <ModalAvailableKamar setShowModal={setShowModal} data={data} /> : null}
          </div>

          <div className="border-2 border-[#E1E4EA] rounded-lg pt-2 mb-8">
            <div
              className="border-b-2 border-[#E1E4EA] flex justify-between pe-3 pb-1 cursor-pointer"
              onClick={() =>
                setIsHidden((prev) => {
                  return { ...prev, desc: !prev.desc };
                })
              }
            >
              <h1 className="ms-4 font-semibold">Deskripsi Kamar</h1>
              <img src={assets.iconUrutkanDaftarKa} alt="" className={`h-5 w-4 duration-300 ${isHidden.desc ? "" : "rotate-180"}`} />
            </div>
            {isHidden.desc ? null : <SectionDescriptionKamar dataDesc={data?.description} />}
          </div>

          <div className="border-2 border-[#E1E4EA] rounded-lg pt-2">
            <div
              className="border-b-2 border-[#E1E4EA] flex justify-between pe-3 pb-1 cursor-pointer"
              onClick={() =>
                setIsHidden((prev) => {
                  return { ...prev, fasilitas: !prev.fasilitas };
                })
              }
            >
              <h1 className="ms-4 font-semibold">Fasilitas Kamar</h1>
              <img src={assets.iconUrutkanDaftarKa} alt="" className={`h-5 w-4 duration-300 ${isHidden.fasilitas ? "" : "rotate-180"}`} />
            </div>
            {isHidden.fasilitas ? null : <SectionFasilitasKamar dataFacilities={data?.hotel_room_facility} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailKamar;

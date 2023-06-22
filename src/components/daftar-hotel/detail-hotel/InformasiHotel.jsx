// ** import react
import React, { useState } from "react";

// ** Import assets
import assets from "../../../assets/assets";
import SectionInformation from "./SectionInformation";
import SectionKebijakan from "./SectionKebijakan";
import ImageHotelSection from "./ImageHotelSection";
import { chooseIconFacility, findLowestRoomPrice, rupiah } from "../../../helpers/libs";

const InformasiHotel = ({ data, dataRating }) => {
  const [isHidden, setIsHidden] = useState({
    fasilitas: true,
    desc: false,
    informasi: false,
    kebijakan: false,
  });

  // find lowest price rooms
  const lowestPrice = findLowestRoomPrice(data?.hotel_room);

  return (
    <div className="bg-[#EBEDF1] text-[#262627]">
      <div className="h-[26rem] bg-white px-8 py-6 flex">
        <ImageHotelSection dataImage={data?.hotel_image} />

        <div className="w-full">
          <div className="flex justify-between mb-2">
            <h1 className="text-[#262627] font-bold text-[2rem]">{data?.name}</h1>
            <div className="text-end flex justify-end">
              {[...Array(5)].map((none, i) => {
                if (i <= Math.floor(parseInt(data?.class)) - 1) {
                  return <img src={assets.iconStarRating} alt="" key={i} />;
                }
                return <img src={assets.iconStarNotRating} alt="" key={i} />;
              })}
            </div>
          </div>

          <h1 className="text-[#0080FF] font-semibold text-xl mb-2">{data?.id}</h1>

          <div className="flex items-center mb-3">
            <img src={assets.iconGpsMarker} alt="" className="mr-2" />
            <h1 className="text-xl font-medium text-[#262627]">{data?.address}</h1>
          </div>

          <div className="flex items-center mb-28">
            <img src={assets.iconStarRating} alt="" className="mr-2" />
            <h1 className="text-[#262627]">
              {dataRating?.data?.rata_rata_rating}/5 <span className="text-[#717275]">({dataRating?.data?.total_rating})</span>
            </h1>
          </div>

          <h1 className="text-xl font-medium mb-2">Harga mulai dari</h1>

          <h1 className="text-[2.5rem] font-bold font-sans text-[#0080FF]">
            {rupiah(lowestPrice)} <span className="text-xl text-[#96989C]">/ kamar / malam</span>
          </h1>
        </div>
      </div>

      <div className={`mt-2 bg-white p-8 pb-3`}>
        <h1 className="text-xl font-bold mb-6">Fasilitas Umum</h1>

        <div className="pt-5 grid grid-cols-8 gap-y-3 ps-10">
          {data?.hotel_facilities?.length < 1
            ? "No Facilities"
            : data?.hotel_facilities?.slice(0, isHidden.fasilitas ? 8 : data?.hotel_facilities.length)?.map((facility, i) => {
                return (
                  <div className="w-24 flex flex-col items-center" key={i}>
                    <img src={chooseIconFacility(facility?.name)} alt="iconwifi" className="w-10 mb-1" />
                    <h1 className="text-center">{facility?.name}</h1>
                  </div>
                );
              })}
        </div>

        <div
          className="py-4 flex justify-center mt-6 cursor-pointer"
          onClick={() =>
            setIsHidden((prev) => {
              return { ...prev, fasilitas: !prev.fasilitas };
            })
          }
        >
          <h1 className="text-[#0080FF] font-medium mr-2">{isHidden.fasilitas ? "Lihat Semua Fasilitas Hotel" : "Hide"}</h1>
          <img src={assets.iconDownArrow} alt="arrow" className={`${isHidden.fasilitas ? "" : "rotate-180 duration-200"}`} />
        </div>
      </div>

      <div className="mt-2 bg-white p-8">
        <div className="border-2 border-[#E1E4EA] rounded-lg pt-2 mb-8">
          <div
            className="border-b-2 border-[#E1E4EA] flex justify-between pe-3 pb-1 cursor-pointer"
            onClick={() =>
              setIsHidden((prev) => {
                return { ...prev, desc: !prev.desc };
              })
            }
          >
            <h1 className="ms-4 font-semibold">Deskripsi Hotel</h1>
            <img src={assets.iconUrutkanDaftarKa} alt="" className={`h-5 w-4 duration-300 ${isHidden.desc ? "rotate-180" : ""}`} />
          </div>
          {isHidden.desc ? null : <div className="p-4 duration-500">{data?.description}</div>}
        </div>

        <div className="border-2 border-[#E1E4EA] rounded-lg pt-2 mb-8">
          <div
            className="border-b-2 border-[#E1E4EA] flex justify-between pe-3 pb-1 cursor-pointer"
            onClick={() =>
              setIsHidden((prev) => {
                return { ...prev, informasi: !prev.informasi };
              })
            }
          >
            <h1 className="ms-4 font-semibold">Informasi Hotel</h1>
            <img src={assets.iconUrutkanDaftarKa} alt="" className={`h-5 w-4 duration-300 ${isHidden.informasi ? "rotate-180" : ""}`} />
          </div>
          {isHidden.informasi ? null : <SectionInformation data={data} />}
        </div>

        <div className="border-2 border-[#E1E4EA] rounded-lg pt-2">
          <div
            className="border-b-2 border-[#E1E4EA] flex justify-between pe-3 pb-1 cursor-pointer"
            onClick={() =>
              setIsHidden((prev) => {
                return { ...prev, kebijakan: !prev.kebijakan };
              })
            }
          >
            <h1 className="ms-4 font-semibold">Kebijakan Hotel</h1>
            <img src={assets.iconUrutkanDaftarKa} alt="" className={`h-5 w-4 duration-300 ${isHidden.kebijakan ? "rotate-180" : ""}`} />
          </div>
          {isHidden.kebijakan ? null : <SectionKebijakan data={data?.hotel_policy} />}
        </div>
      </div>
    </div>
  );
};

export default InformasiHotel;

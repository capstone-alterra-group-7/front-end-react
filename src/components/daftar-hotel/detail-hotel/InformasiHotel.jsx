// ** import react
import React, { useState } from "react";

// ** Import assets
import assets from "../../../assets/assets";
import SectionInformation from "./SectionInformation";
import SectionKebijakan from "./SectionKebijakan";
import ImageSection from "./ImageSection";
import MapComponent from "./MapComponent";

const InformasiHotel = ({ data }) => {
  const [isHidden, setIsHidden] = useState({ fasilitas: true, desc: true, informasi: true, kebijakan: true });

  const rupiah = (number) => {
    if (!number) return "Rp 0";
    else
      return new Intl.NumberFormat("id-ID", {
        style: "currency",
        maximumSignificantDigits: 4,
        currency: "IDR",
      }).format(number);
  };
  return (
    <div className="bg-[#EBEDF1] text-[#262627]">
      <div className="h-[26rem] bg-white px-8 py-6 flex">
        <ImageSection />

        <div className="w-full">
          <div className="flex justify-between mb-2">
            <h1 className="text-[#262627] font-bold text-[2rem]">{data.name}</h1>
            <div className="text-end flex justify-end">
              {[...Array(5)].map((none, i) => {
                if (i <= Math.floor(data.rating) - 1) {
                  return <img src={assets.iconStarRating} alt="" key={i} />;
                }
                return <img src={assets.iconStarNotRating} alt="" key={i} />;
              })}
            </div>
          </div>

          <h1 className="text-[#0080FF] font-semibold text-xl mb-2">{data.id}</h1>

          <div className="flex items-center mb-3">
            <img src={assets.iconGpsMarker} alt="" className="mr-2" />
            <h1 className="text-xl font-medium text-[#262627]">
              {data.regency_id}, {data.province_id}
            </h1>
          </div>

          <div className="flex items-center mb-28">
            <img src={assets.iconStarRating} alt="" className="mr-2" />
            <h1 className="text-[#262627]">
              {data.rating}/5 <span className="text-[#717275]">(500)</span>
            </h1>
          </div>

          <h1 className="text-xl font-medium mb-2">Harga mulai dari</h1>

          <h1 className="text-[2.5rem] font-bold font-sans text-[#0080FF]">
            {rupiah(data.price)} <span className="text-xl text-[#96989C]">/ kamar / malam</span>
          </h1>
        </div>
      </div>

      <div className={`mt-2 bg-white ${isHidden.fasilitas ? "h-[19rem]" : ""} p-8`}>
        <h1 className="text-xl font-bold mb-6">Fasilitas Umum</h1>

        <div className="pt-5 grid grid-cols-8 content-evenly gap-y-3 ps-10">
          {[...Array(isHidden.fasilitas ? 8 : 18)].map((none, i) => {
            return (
              <div className="w-24 flex flex-col justify-center items-center" key={i}>
                <img src={assets.iconWifi} alt="iconwifi" className="w-10" />
                <h1 className="text-center">Resepsionis 24 jam</h1>
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
          {isHidden.desc ? null : (
            <div className="p-4 duration-500">
              Grand Palace Hotel adalah hotel mewah yang terletak di pusat kota Jakarta, menawarkan kenyamanan dan kemewahan bagi para tamu yang menginap. Dengan desain elegan dan pelayanan yang
              ramah, hotel ini menawarkan pengalaman menginap yang tak terlupakan. Grand Palace Hotel memiliki lokasi strategis yang dekat dengan pusat perbelanjaan, tempat wisata, dan area bisnis.
            </div>
          )}
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
          {isHidden.informasi ? null : <SectionInformation />}
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
            <img src={assets.iconUrutkanDaftarKa} alt="" className={`h-5 w-4 duration-300 ${isHidden.informasi ? "rotate-180" : ""}`} />
          </div>
          {isHidden.kebijakan ? null : <SectionKebijakan />}
        </div>

        <div className="mt-16">
          <h1 className="font-bold text-xl mb-6">Lokasi Hotel</h1>
          <MapComponent isMarkerShown />
        </div>
      </div>
    </div>
  );
};

export default InformasiHotel;

import React, { useState } from "react";

// ** Import Component
import BackButtonHotel from "../../../../components/daftar-hotel/detail-hotel/BackButtonHotel";
import ButtonDetailHotel from "../../../../components/daftar-hotel/detail-hotel/ButtonDetailHotel";
import CarouselPhoto from "../../../../components/daftar-hotel/detail-hotel/daftar-kamar/detail-kamar/CarouselPhoto";
import assets from "../../../../assets/assets";
import SectionDescriptionKamar from "../../../../components/daftar-hotel/detail-hotel/daftar-kamar/detail-kamar/SectionDescriptionKamar";
import SectionFasilitasKamar from "../../../../components/daftar-hotel/detail-hotel/daftar-kamar/detail-kamar/SectionFasilitasKamar";
import ModalAvailableKamar from "../../../../components/daftar-hotel/detail-hotel/daftar-kamar/detail-kamar/ModalAvailableKamar";

const DetailKamar = () => {
  const [isHidden, setIsHidden] = useState({ desc: false, fasilitas: false });
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal((prev) => !prev);
  };

  return (
    <div className="bg-[#FFFFFF] fixed overflow-y-auto left-0 right-0 h-full">
      <div className="px-7 p-3">
        <h1 className=" text-[32px] font-bold">Detail Kamar</h1>

        <div className="pt-7 flex justify-between items-center">
          <BackButtonHotel url={"/daftar-hotel"} />
          <ButtonDetailHotel title={"Kamar"} />
        </div>
      </div>

      <div className="p-6">
        <CarouselPhoto />
        <div className="mt-8 flex w-11/12 left-1/2 -translate-x-1/2 relative">
          <img src={assets.imageKamar2} alt="" className="mr-4 w-32 h-32" />
          <img src={assets.imageKamar2} alt="" className="mr-4 w-32 h-32" />
          <img src={assets.imageKamar2} alt="" className="mr-4 w-32 h-32" />
        </div>

        <div className="mt-12">
          <h1 className="font-bold text-3xl mb-4">Nama Kamar</h1>
          <div className="flex">
            <img src={assets.iconSeat} alt="" className="mr-2" />
            <h1 className="font-medium">
              24 m<sup>2</sup>
            </h1>
          </div>

          <div className="mt-5 mb-8 flex items-center relative">
            <h1>
              Total Kamar : <span className="font-semibold">20 Kamar</span>
            </h1>
            <button className="ms-4 h-11 py-3 px-6 bg-[#0080FF] hover:bg-opacity-80 text-white rounded-lg" onClick={handleShowModal}>
              Lihat Ketersediaan Kamar
            </button>
            {showModal ? <ModalAvailableKamar setShowModal={setShowModal} /> : null}
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
            {isHidden.desc ? null : <SectionDescriptionKamar />}
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
            {isHidden.fasilitas ? null : <SectionFasilitasKamar />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailKamar;

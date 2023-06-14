import React, { useState } from "react";
import assets from "../../../../assets/assets";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

// ** Import Component
import BackButtonHotel from "../../../../components/daftar-hotel/detail-hotel/BackButtonHotel";
import ButtonDetailHotel from "../../../../components/daftar-hotel/detail-hotel/ButtonDetailHotel";
import CarouselPhoto from "../../../../components/daftar-hotel/detail-hotel/daftar-kamar/detail-kamar/CarouselPhoto";
import SectionDescriptionKamar from "../../../../components/daftar-hotel/detail-hotel/daftar-kamar/detail-kamar/SectionDescriptionKamar";
import SectionFasilitasKamar from "../../../../components/daftar-hotel/detail-hotel/daftar-kamar/detail-kamar/SectionFasilitasKamar";
import ModalAvailableKamar from "../../../../components/daftar-hotel/detail-hotel/daftar-kamar/detail-kamar/ModalAvailableKamar";
import ModalConfirmHotel from "../../../../components/daftar-hotel/ModalConfirmHotel";
import { baseUrl } from "../../../../services/base";
import { customAlert } from "../../../../helpers/customAlert";

const fetcherGet = (url) => axios.get(url).then((res) => res.data);
const fetcherDelete = (url) => axios.delete(url).then((res) => res.data);

const DetailKamar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: dataKamarById, isLoading, mutate } = useSWR(baseUrl(`/public/hotel-room/${id}`), fetcherGet);

  const [isHidden, setIsHidden] = useState({ desc: false, fasilitas: false });
  const [modalButtonDetail, setModalButtonDetail] = useState({ edit: false, delete: false });
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleShowModal = (e) => {
    e.preventDefault();
    setShowModal((prev) => !prev);
  };

  // Function delete hotel by id
  const handleDeleteRoom = () => {
    setLoading(true);

    fetcherDelete(baseUrl(`/admin/hotel-room/${id}`))
      .then(() => {
        customAlert("https://gcdnb.pbrd.co/images/UsggKXgrW4ny.png?o=1", "Data Dihapus", `Data kamar hotel ${dataKamarById.data.name} telah berhasil dihapus dari sistem.`);

        setLoading(false);

        navigate(`/detail-hotel/${dataKamarById?.data?.hotel_id}`);
      })
      .catch((err) => {
        setLoading(false);

        console.log(err);
      });
  };

  return (
    <>
      {typeof dataKamarById === "undefined" ? (
        <div className="w-full flex flex-col items-center relative">
          <img src={assets.imageNoData} alt="" className="" />
          <h1 className="font-bold text-2xl absolute bottom-2">Ups! Data kamar yang dicari tidak ditemukan</h1>
          <Link to={"/daftar-hotel"} className="mt-2 text-[#0080FF] font-semibold absolute -bottom-6 flex">
            <img src={assets.iconDownArrow} alt="" className="rotate-90" /> Kembali
          </Link>
        </div>
      ) : (
        <div className="bg-[#FFFFFF] fixed overflow-y-auto left-0 right-0 h-full">
          <div className="px-7 p-3">
            <h1 className=" text-[32px] font-bold">Detail Kamar</h1>

            <div className="pt-7 flex justify-between items-center">
              <BackButtonHotel url={`/detail-hotel/${dataKamarById?.data?.hotel_id}`} />
              <ButtonDetailHotel title={"Kamar"} setModal={setModalButtonDetail} />
            </div>
            {/* Modal Confirm */}
            {modalButtonDetail.delete && (
              <ModalConfirmHotel
                title="Menghapus Data Kamar"
                desc="Anda akan menghapus data kamar ini. Apakah Anda yakin ingin melanjutkan? Tindakan ini tidak dapat diurungkan."
                bg="bg-[#DB2D24]"
                cancel="Batal"
                confirm="Hapus"
                name="delete"
                loading={loading}
                setModal={setModalButtonDetail}
                handle={handleDeleteRoom}
              />
            )}
          </div>

          <div className="p-6">
            <CarouselPhoto width={"w-10/12"} />
            <div className="mt-8 flex w-11/12 left-1/2 -translate-x-1/2 relative">
              <img src={assets.imageKamar2} alt="" className="mr-4 w-32 h-32" />
              <img src={assets.imageKamar2} alt="" className="mr-4 w-32 h-32" />
              <img src={assets.imageKamar2} alt="" className="mr-4 w-32 h-32" />
            </div>

            <div className="mt-12">
              <h1 className="font-bold text-3xl mb-4">{dataKamarById?.data?.name}</h1>
              <div className="flex">
                <img src={assets.iconRuler} alt="" className="mr-2" />
                <h1 className="font-semibold">
                  {dataKamarById?.data?.size_of_room} m<sup>2</sup>
                </h1>
              </div>

              <div className="mt-5 mb-8 flex items-center relative">
                <h1>
                  Total Kamar : <span className="font-semibold">{dataKamarById?.data?.quantity_of_room} Kamar</span>
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
                {isHidden.desc ? null : <SectionDescriptionKamar dataDesc={dataKamarById?.data?.description} />}
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
                {isHidden.fasilitas ? null : <SectionFasilitasKamar dataFacilities={dataKamarById?.data?.hotel_room_facility} />}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DetailKamar;

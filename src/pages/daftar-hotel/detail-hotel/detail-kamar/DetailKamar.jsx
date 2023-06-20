import React, { useState } from "react";
import assets from "../../../../assets/assets";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

// ** Import Component
import BackButtonHotel from "../../../../components/daftar-hotel/detail-hotel/BackButtonHotel";
import ButtonDetailHotel from "../../../../components/daftar-hotel/detail-hotel/ButtonDetailHotel";
import SectionDescriptionKamar from "../../../../components/daftar-hotel/detail-hotel/daftar-kamar/detail-kamar/SectionDescriptionKamar";
import SectionFasilitasKamar from "../../../../components/daftar-hotel/detail-hotel/daftar-kamar/detail-kamar/SectionFasilitasKamar";
import ModalAvailableKamar from "../../../../components/daftar-hotel/detail-hotel/daftar-kamar/detail-kamar/ModalAvailableKamar";
import ModalConfirmHotel from "../../../../components/daftar-hotel/ModalConfirmHotel";
import { baseUrl } from "../../../../services/base";
import { customAlert } from "../../../../helpers/customAlert";
import DetailKamarCarousel from "../../../../components/daftar-hotel/detail-hotel/DetailKamarCarousel";

const fetcherGet = (url) => axios.get(url).then((res) => res.data);
const fetcherDelete = (url) => axios.delete(url).then((res) => res.data);

const DetailKamar = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: dataKamarById, isLoading } = useSWR(baseUrl(`/public/hotel-room/${id}`), fetcherGet);

  const [indexImg, setIndexImg] = useState(0);
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
        customAlert(
          "https://gcdnb.pbrd.co/images/UsggKXgrW4ny.png?o=1",
          "Data Dihapus",
          `Data kamar hotel ${dataKamarById.data.name} telah berhasil dihapus dari sistem.`
        );

        setLoading(false);

        navigate(`/detail-hotel/${dataKamarById?.data?.hotel_id}`);
      })
      .catch((err) => {
        setLoading(false);

        console.log(err);
      });
  };

  // Function edit button
  const handleEditNavigate = () => {
    navigate("/daftar-hotel/tambah-hotel/tambah-kamar", { state: dataKamarById });
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
          </div>

          <div className="p-6">
            <DetailKamarCarousel
              imgUrl={dataKamarById?.data?.hotel_room_image}
              indexImg={indexImg}
              setIndexImg={setIndexImg}
              name="detail-main"
            />
            <div
              className={`flex flex-wrap ${
                dataKamarById?.data?.hotel_room_image?.length <= 4 ? "justify-center" : ""
              } w-full gap-5 overflow-y-scroll 2xl:h-40 xl:h-36 h-28 xl:mt-4 scrollBar px-2`}
            >
              {dataKamarById?.data?.hotel_room_image?.map((url, idx) => (
                <img
                  src={url?.image_url}
                  alt=""
                  className={`2xl:w-40 xl:w-36 w-28 rounded-3xl cursor-pointer duration-100 object-cover ${
                    indexImg === idx ? "border-4 border-[#0080FF]" : null
                  }`}
                  onClick={() => setIndexImg(idx)}
                />
              ))}
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
                <button
                  className="ms-4 h-11 py-3 px-6 bg-[#0080FF] hover:bg-opacity-80 text-white rounded-lg"
                  onClick={handleShowModal}
                >
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
                  <img
                    src={assets.iconUrutkanDaftarKa}
                    alt=""
                    className={`h-5 w-4 duration-300 ${isHidden.desc ? "" : "rotate-180"}`}
                  />
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
                  <img
                    src={assets.iconUrutkanDaftarKa}
                    alt=""
                    className={`h-5 w-4 duration-300 ${isHidden.fasilitas ? "" : "rotate-180"}`}
                  />
                </div>
                {isHidden.fasilitas ? null : (
                  <SectionFasilitasKamar dataFacilities={dataKamarById?.data?.hotel_room_facility} />
                )}
              </div>
            </div>
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
          {modalButtonDetail.edit && (
            <ModalConfirmHotel
              title="Ubah Data Kamar"
              desc="Anda akan mengubah data kamar ini. Apakah Anda yakin ingin melanjutkan?"
              bg="bg-[#0080FF]"
              cancel="Batal"
              confirm="Ubah"
              name="edit"
              loading={loading}
              setModal={setModalButtonDetail}
              handle={handleEditNavigate}
            />
          )}
        </div>
      )}
    </>
  );
};

export default DetailKamar;

import React, { useState } from "react";

// ** Import Other
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";
import assets from "../../../assets/assets";
import { baseUrl } from "../../../services/base";
import { customAlert } from "../../../helpers/customAlert";

// ** Import Components
import BackButtonHotel from "../../../components/daftar-hotel/detail-hotel/BackButtonHotel";
import ButtonDetailHotel from "../../../components/daftar-hotel/detail-hotel/ButtonDetailHotel";
import NavDetailHotel from "../../../components/daftar-hotel/detail-hotel/NavDetailHotel";
import InformasiHotel from "../../../components/daftar-hotel/detail-hotel/InformasiHotel";
import DaftarKamar from "../../../components/daftar-hotel/detail-hotel/daftar-kamar/DaftarKamar";
import Ulasan from "../../../components/daftar-hotel/detail-hotel/ulasan/Ulasan";
import ModalConfirmHotel from "../../../components/daftar-hotel/ModalConfirmHotel";

const fetcherGet = (url) => axios.get(url).then((res) => res.data);
const fetcherDelete = (url) => axios.delete(url).then((res) => res.data);

const DetailHotel = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const { data: dataHotelById, isLoading, mutate } = useSWR(baseUrl(`/public/hotel/${id}`), fetcherGet);
  // console.log("Data Hotel by id: ", dataHotelById);

  // ** Local State
  const [nav, setNav] = useState("informasi");
  const [modalButtonDetail, setModalButtonDetail] = useState({ edit: false, delete: false });
  const [loading, setLoading] = useState(false);

  // Function delete hotel by id
  const handleDeleteHotel = () => {
    setLoading(true);

    fetcherDelete(baseUrl(`/admin/hotel/${id}`))
      .then(() => {
        customAlert(
          "https://gcdnb.pbrd.co/images/UsggKXgrW4ny.png?o=1",
          "Data Dihapus",
          `Data hotel ${dataHotelById.data.name} telah berhasil dihapus dari sistem.`
        );

        setLoading(false);

        navigate("/daftar-hotel");
      })
      .catch((err) => {
        setLoading(false);

        console.log(err);
      });
  };

  // Function edit button
  const handleEditNavigate = () => {
    navigate("/daftar-hotel/tambah-hotel", { state: dataHotelById });
  };

  return (
    <>
      {typeof dataHotelById === "undefined" ? (
        <div className="w-full flex flex-col items-center relative">
          <img src={assets.imageNoData} alt="" className="" />
          <h1 className="font-bold text-2xl absolute bottom-2">Ups! Data hotel yang dicari tidak ditemukan</h1>
          <Link to={"/daftar-hotel"} className="mt-2 text-[#0080FF] font-semibold absolute -bottom-6 flex">
            <img src={assets.iconDownArrow} alt="" className="rotate-90" /> Kembali
          </Link>
        </div>
      ) : (
        <div className="bg-[#FFFFFF] fixed overflow-y-auto left-0 right-0 h-full">
          <div className="space-y-3">
            <div className="px-7 p-3">
              <h1 className=" text-[34px] font-bold">Detail Hotel</h1>

              <div className="pt-7 flex justify-between items-center">
                <BackButtonHotel url={"/daftar-hotel"} />
                <ButtonDetailHotel title={"Hotel"} setModal={setModalButtonDetail} />
              </div>
            </div>

            <NavDetailHotel nav={nav} setNav={setNav} />
          </div>

          {nav === "informasi" ? (
            <InformasiHotel data={dataHotelById?.data} />
          ) : nav === "daftarKamar" ? (
            <DaftarKamar data={dataHotelById?.data?.hotel_room} />
          ) : (
            <Ulasan data={dataHotelById?.data} />
          )}

          {modalButtonDetail.delete && (
            <ModalConfirmHotel
              title="Menghapus Data Hotel"
              desc="Anda akan menghapus data hotel ini. Apakah Anda yakin ingin melanjutkan? Tindakan ini tidak dapat diurungkan."
              bg="bg-[#DB2D24]"
              cancel="Batal"
              confirm="Hapus"
              name="delete"
              loading={loading}
              setModal={setModalButtonDetail}
              handle={handleDeleteHotel}
            />
          )}
          {modalButtonDetail.edit && (
            <ModalConfirmHotel
              title="Ubah Data Hotel"
              desc="Anda akan mengubah data hotel ini. Apakah Anda yakin ingin melanjutkan?"
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

export default DetailHotel;

import React, { useState } from "react";

// ** Import Other
import { useLocation, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import useSWR from "swr";

// ** Import Components
import BackButtonHotel from "../../../components/daftar-hotel/detail-hotel/BackButtonHotel";
import ButtonDetailHotel from "../../../components/daftar-hotel/detail-hotel/ButtonDetailHotel";
import NavDetailHotel from "../../../components/daftar-hotel/detail-hotel/NavDetailHotel";
import InformasiHotel from "../../../components/daftar-hotel/detail-hotel/InformasiHotel";
import DaftarKamar from "../../../components/daftar-hotel/detail-hotel/daftar-kamar/DaftarKamar";
import Ulasan from "../../../components/daftar-hotel/detail-hotel/ulasan/Ulasan";
import { baseUrl } from "../../../services/base";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const DetailHotel = () => {
  // const {
  //   state: { data },
  // } = useLocation();
  const { id } = useParams();
  // const {
  //   state: { id },
  // } = useLocation();

  // console.log(data);
  const { data: dataHotelById, isLoading, mutate } = useSWR(baseUrl(`/public/hotel/${id}`), fetcher);

  // ** Local State
  const [nav, setNav] = useState("informasi");
  const [modal, setModal] = useState(false);

  return (
    <div className="bg-[#FFFFFF] fixed overflow-y-auto left-0 right-0 h-full">
      <div className="space-y-3">
        <div className="px-7 p-3">
          <h1 className=" text-[34px] font-bold">Detail Hotel</h1>

          <div className="pt-7 flex justify-between items-center">
            <BackButtonHotel url={"/daftar-hotel"} />
            <ButtonDetailHotel title={"Hotel"} setModal={setModal} />
          </div>
        </div>

        <NavDetailHotel nav={nav} setNav={setNav} />
      </div>

      {nav === "informasi" ? <InformasiHotel data={dataHotelById?.data} /> : nav === "daftarKamar" ? <DaftarKamar data={dataHotelById?.data?.hotel_room} /> : <Ulasan data={dataHotelById?.data} />}
    </div>
  );
};

export default DetailHotel;

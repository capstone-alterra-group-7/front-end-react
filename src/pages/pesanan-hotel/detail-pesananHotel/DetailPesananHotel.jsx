// Import React
import React from "react";

// Import Components
import BackDetailHotel from "../../../components/pesanan-hotel/detail-pesananHotel/BackDetailHotel";
// ** Import Components
import CardDetailHotel from "../../../components/pesanan-hotel/detail-pesananHotel/CardDetailHotel";
import CardDetailAkunPengguna from "../../../components/pesanan-hotel/detail-pesananHotel/CardDetailAkunPengguna";
import CardDataPemesan from "../../../components/pesanan-hotel/detail-pesananHotel/CardDataPemesan";
import CardPesananan from "../../../components/pesanan-hotel/detail-pesananHotel/CardPesanan";
import CardDaftarTamu from "../../../components/pesanan-hotel/detail-pesananHotel/CardDaftarTamu";
import CardRincianHarga from "../../../components/pesanan-hotel/detail-pesananHotel/CardRincianHarga";

// ** Import Other
import { useLocation } from "react-router-dom";

const DetailPesananHotel = () => {
  const { state } = useLocation();

  return (
    <div className="bg-[#EBEDF1] fixed overflow-y-auto left-0 right-0 h-full">
      <div className="relative">
        <div className=" bg-white h-[152px] pt-[18px] pb-6 pr-8 flex justify-between">
          <h1 className="text-[32px] font-bold ml-[30px]">
            Detail Pesanan Hotel
          </h1>
        </div>

        <div className="absolute top-[100px] left-[7.33px] bottom-[31.33px]">
          <BackDetailHotel />
        </div>

        <CardDetailHotel data={state.data} />
        <CardDetailAkunPengguna data={state.data} />
        <CardDataPemesan data={state.data} />
        <CardPesananan data={state.data} />
        <CardDaftarTamu data={state.data} />
        <CardRincianHarga data={state.data} />
      </div>
    </div>
  );
};

export default DetailPesananHotel;

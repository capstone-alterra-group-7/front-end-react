import React from "react";

// ** Import Components
import SuccessLogin from "../../components/auth/SuccessLogin";
import CardPengguna from "../../components/dashboard/CardPengguna";
import CardHotel from "../../components/dashboard/CardHotel";
import CardKeretaApi from "../../components/dashboard/CardKeretaApi";
import CardPesanan from "../../components/dashboard/CardPesanan";
import CardPesananBaru from "../../components/dashboard/CardPesananBaru";

// ** Import Redux
import { useSelector } from "react-redux";
import CardPenggunaBaru from "../../components/dashboard/CardPenggunaBaru";

const Dashboard = () => {
  // ** Redux State
  const isLogin = useSelector((state) => state.tokenAuth.isLogin);

  if (isLogin) {
    return <SuccessLogin />;
  }

  return (
    <div className="relative">
      <div className=" bg-white px-[32px] pt-[18px] pb-6 pr-8 py-[16px] flex justify-between">
        <h1 className="text-[32px] font-bold ">Dashboard</h1>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <CardPengguna />
        <CardHotel />
        <CardKeretaApi />
        <CardPesanan />
      </div>

      <div className="grid grid-cols-6">
        <CardPesananBaru />

        <CardPenggunaBaru />
      </div>
    </div>
  )
}


export default Dashboard;

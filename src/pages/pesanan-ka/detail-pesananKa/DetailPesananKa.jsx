import React from "react";
import BarDetailPesananKa from "../../../components/pesanan-ka/detail-pesananKa/BarDetailPesananKa";
import TrainDetail from "../../../components/pesanan-ka/detail-pesananKa/TrainDetail";
import PessangerDetail from "../../../components/pesanan-ka/detail-pesananKa/PessangerDetail";
import PriceDetail from "../../../components/pesanan-ka/detail-pesananKa/PriceDetail";
import { useLocation } from "react-router-dom";

export default function DetailPesananKa() {
  const {
    state: { data },
  } = useLocation();

  return (
    <div className="bg-[#F5F6F8] fixed overflow-y-auto left-0 right-0 h-full">
      <BarDetailPesananKa />

      <hr />

      <div className="text-[#262627]">
        <TrainDetail data={data} />

        <PessangerDetail data={data} />

        <PriceDetail data={data} />
      </div>
    </div>
  );
}

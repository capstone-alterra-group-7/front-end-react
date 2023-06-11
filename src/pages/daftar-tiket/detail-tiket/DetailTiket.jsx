// ** Import Components
import BarDetailTiket from "../../../components/daftar-tiket/detail-tiket/BarDetailTiket";
import TrainDetail from "../../../components/daftar-tiket/detail-tiket/TrainDetail";
import Gerbong from "../../../components/daftar-tiket/detail-tiket/Gerbong";

// ** Import Other
import { useLocation } from "react-router-dom";

export default function DetailTiket() {
  const { state } = useLocation();

  return (
    <div className="fixed overflow-y-auto left-0 right-0 h-full bg-[#F5F6F8]">
      <BarDetailTiket data={state} />

      <hr className="py-[1px]" />

      <TrainDetail data={state} />

      <Gerbong data={state} />
    </div>
  );
}

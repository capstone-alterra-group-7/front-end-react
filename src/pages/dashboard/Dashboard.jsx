// ** Import Components
import CardPengguna from "../../components/dashboard/CardPengguna";
import CardHotel from "../../components/dashboard/CardHotel";
import CardKeretaApi from "../../components/dashboard/CardKeretaApi";
import CardPesanan from "../../components/dashboard/CardPesanan";
import CardPenggunaBaru from "../../components/dashboard/CardPenggunaBaru";
import CardPesananBaru from "../../components/dashboard/CardPesananBaru";

// ** Import Axios
import axios from "axios";
import useSWR from "swr";
import { baseUrl } from "../../services/base";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const Dashboard = () => {
  const { data: dataDashboard, isLoading } = useSWR(
    baseUrl(`/admin/dashboard`),
    fetcher
  );

  return (
    <div className="relative">
      <div className=" bg-white px-[32px] pt-[18px] pb-6 pr-8 py-[16px] flex justify-between">
        <h1 className="text-[32px] font-bold ">Dashboard</h1>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <CardPengguna data={dataDashboard} />
        <CardHotel />
        <CardKeretaApi dataKAI={dataDashboard} />
        <CardPesanan dataORDER={dataDashboard} />
      </div>

      <div className="grid grid-cols-6 items-start">
        <CardPesananBaru dataPesananBaru={dataDashboard} />
        <CardPenggunaBaru dataPenggunaBaru={dataDashboard} />
      </div>
    </div>
  );
};

export default Dashboard;

// ** Import Components
import CardPengguna from "../../components/dashboard/CardPengguna";
import CardHotel from "../../components/dashboard/CardHotel";
import CardKeretaApi from "../../components/dashboard/CardKeretaApi";
import CardPesanan from "../../components/dashboard/CardPesanan";
import CardPenggunaBaru from "../../components/dashboard/CardPenggunaBaru";
import CardPesananBaru from "../../components/dashboard/CardPesananBaru";
import LoaderPages from "../../globals/LoaderPages";
import ErrorPages from "../../globals/ErrorPages";
import TitlePage from "../../globals/TitlePage";

// ** Import Axios
import useSWR from "swr";
import { baseUrl } from "../../services/base";
import { fetcherGet } from "../../services/fetcher/fetcher";

const Dashboard = () => {
  const {
    data: dataDashboard,
    isLoading,
    error,
  } = useSWR(baseUrl(`/admin/dashboard`), fetcherGet);

  if (error) {
    return <ErrorPages />;
  }

  return (
    <div className="relative">
      <TitlePage title="Dashboard" />

      <div className=" bg-white px-[32px] pt-[18px] pb-6 pr-8 py-[16px] flex justify-between border-b">
        <h1 className="text-[32px] font-bold ">Dashboard</h1>
      </div>

      <div className="grid grid-cols-4 gap-6">
        <CardPengguna data={dataDashboard} />
        <CardHotel data={dataDashboard} />
        <CardKeretaApi dataKAI={dataDashboard} />
        <CardPesanan dataORDER={dataDashboard} />
      </div>

      <div className="grid grid-cols-6 items-start">
        <CardPesananBaru dataPesananBaru={dataDashboard} />
        <CardPenggunaBaru dataPenggunaBaru={dataDashboard} />
      </div>

      {isLoading && <LoaderPages />}
    </div>
  );
};

export default Dashboard;

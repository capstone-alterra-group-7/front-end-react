// * Import Components
import axios from "axios";
import BarDaftarTiket from "../../components/daftar-tiket/BarDaftarTiket";
import CardDaftarTiket from "../../components/daftar-tiket/CardDaftarTiket";

// ** Import Other
import { baseUrl } from "../../services/base";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const DaftarTiket = () => {
  const { data: daftarTicket, isLoading } = useSWR(
    baseUrl(`/admin/order/ticket`),
    fetcher
  );

  return (
    <div>
      <BarDaftarTiket />
      {daftarTicket?.data?.map((ticket) => (
        <CardDaftarTiket />
      ))}
    </div>
  );
};

export default DaftarTiket;

// ** Import Components
import CardPesananHotel from "./CardPesananHotel";

// ** Import Other
import { baseUrl } from "../../services/base";
import useSWR from "swr";
import axios from "axios";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const CardContainerPesananHotel = () => {
  const { data: daftarHotel, isLoading } = useSWR(
    baseUrl(`/admin/order/hotel`),
    fetcher
  );

  return (
    <div className="py-8 px-7">
      {daftarHotel?.data?.map((data, idx) => {
        return <CardPesananHotel data={data} key={idx} />;
      })}
    </div>
  );
};

export default CardContainerPesananHotel;

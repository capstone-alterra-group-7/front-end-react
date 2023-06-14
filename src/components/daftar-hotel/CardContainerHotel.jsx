// ** Import Components
import { baseUrl } from "../../services/base";
import CardHotel from "./CardHotel";

// ** import redux
import { useSelector } from "react-redux";
import axios from "axios";
import useSWR from "swr";

const fetcher = (url) => axios.get(url).then((res) => res.data);

const CardContainerHotel = () => {
  const daftarHotel = useSelector((state) => state.daftarHotel);
  const { data: dataHotel, isLoading, mutate } = useSWR(baseUrl(`/public/hotel`), fetcher);

  // console.log("Data List Hotel", dataHotel);

  return (
    <div className="py-8 px-7">
      {dataHotel?.data?.map((data, idx) => {
        return <CardHotel data={data} key={idx} />;
      })}
    </div>
  );
};

export default CardContainerHotel;

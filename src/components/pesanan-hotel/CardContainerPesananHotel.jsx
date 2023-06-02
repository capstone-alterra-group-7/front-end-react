// ** Import Components
import CardPesananHotel from "./CardPesananHotel";

// ** import redux
import { useSelector } from "react-redux";

const CardContainerPesananHotel = () => {
  const daftarHotel = useSelector((state) => state.daftarHotel);

  return (
    <div className="py-8 px-7 pb-[85px]">
      {daftarHotel.map((data, idx) => {
        return <CardPesananHotel data={data} key={idx} />;
      })}
    </div>
  );
};

export default CardContainerPesananHotel;

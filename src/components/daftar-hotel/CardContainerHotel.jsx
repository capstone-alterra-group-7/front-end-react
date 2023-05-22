// ** Import Components
import CardHotel from "./CardHotel";

// ** import redux
import { useSelector } from "react-redux";

const CardContainerHotel = () => {
  const daftarHotel = useSelector((state) => state.daftarHotel);

  return (
    <div className="py-8 px-7">
      {daftarHotel.map((data, idx) => {
        return <CardHotel data={data} key={idx} />;
      })}
    </div>
  );
};

export default CardContainerHotel;

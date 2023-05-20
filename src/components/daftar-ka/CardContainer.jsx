// ** Import Components
import { useSelector } from "react-redux";
import CardKA from "./CardKA";

const CardContainer = () => {
  const daftarKA = useSelector((state) => state.daftarKa);

  return (
    <div className="py-8 px-7">
      {daftarKA.map((ka, index) => (
        <CardKA data={ka} key={index} />
      ))}
    </div>
  );
};

export default CardContainer;

// ** Import Components
import { useDispatch, useSelector } from "react-redux";
import CardKA from "./CardKA";

// ** Import Other
import "./styleKA.css";

const CardContainer = () => {
  const daftarKA = useSelector((state) => state.daftarKa);

  return (
    <div className="h-[862px] overflow-y-scroll no-scrollbar py-8">
      {daftarKA.map((ka, index) => (
        <CardKA data={ka} key={index} />
      ))}
    </div>
  );
};

export default CardContainer;

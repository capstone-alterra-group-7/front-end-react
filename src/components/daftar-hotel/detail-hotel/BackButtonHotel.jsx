// ** Import Assets
import assets from "../../../assets/assets";

// ** Import Other
import { Link } from "react-router-dom";

const BackButtonHotel = ({ url }) => {
  return (
    <Link to={url} className="text-[#0080FF] flex gap-2 items-center text-[16px] ml-[5px]">
      <img src={assets.iconBackDaftarKa} alt="back" />
      Kembali
    </Link>
  );
};

export default BackButtonHotel;

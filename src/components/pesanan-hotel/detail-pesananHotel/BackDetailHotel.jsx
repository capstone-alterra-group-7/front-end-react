// ** Import Assets
import assets from "../../../assets/assets";

// ** Import Other
import { Link } from "react-router-dom";

const BackDetailHotel = () => {
    return (
        <Link
            to="/pesanan-hotel"
            className="text-[#0080FF] ml-[44px] flex gap-2 items-center text-[16px] "
        >
            <img src={assets.iconBackDaftarKa} alt="back" />
            Kembali
        </Link>
    );
};

export default BackDetailHotel;
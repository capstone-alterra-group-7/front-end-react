// ** Import Assets
import assets from "../../../assets/assets";

// ** Import Other
import { useNavigate } from "react-router-dom";
import moment from "moment";

export default function BarDetailTiket({ data }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/daftar-tiket");
  };
  return (
    <div className="bg-white text-[#262627] px-[32px] py-[16px] ">
      <h1 className="text-[32px] font-[700]">Detail Pesanan Kereta Api</h1>

      <div className="flex items-center justify-between">
        <div className="">
          <button className="flex items-center pt-[32px]" onClick={handleClick}>
            <img src={assets.iconBackDaftarKa} alt="back" />
            <span className="ms-2 text-[#0080FF]">Kembali</span>
          </button>
        </div>

        <div className="flex justify-center gap-1 items-center pt-[32px]">
          <p className="text-[#262627] text-[14px] font-[600] me-2">Dari</p>
          <div className="flex bg-[#F9FAFB] border border-[#D2D7E0] p-2 rounded-md">
            <p className="pe-[75px] text-[#96989C] text-[16px] font-[400]">
              {moment(data.date).format("D MMMM YYYY")}
            </p>
            <img src={assets.calender} alt="calender" />
          </div>
        </div>
      </div>
    </div>
  );
}

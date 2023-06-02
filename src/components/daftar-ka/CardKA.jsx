// ** Import Assets
import assets from "./../../assets/assets";

// ** Import Other
import { Link, useNavigate } from "react-router-dom";

const CardKA = ({ data }) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/detail-ka", {
      state: {
        data,
      },
    });
  };

  return (
    <div onClick={handleNavigate}>
      <div className="h-80 rounded-[32px] bg-[#FFFFFF] p-8 mx-auto mb-8 flex justify-between border-2 border-[#E1E4EA] cursor-pointer">
        {/* right section */}
        <div className="w-[230px]">
          <img src={assets.logoKai} alt="" />
          <h1 className="font-bold text-xl mt-8">
            {data.namaKa}{" "}
            <span className="font-bold text-[#96989C] text-xl">
              ({data.kelasKa})
            </span>
          </h1>
          <h1 className="font-bold text-[#0080FF] text-xl mt-3">
            #{data.noKa}
          </h1>
          <h1 className="font-bold text-[#0080FF] text-2xl mt-12">
            Rp {data.harga}
          </h1>
          <h1 className="text-[#262627] mt-4">150 Kursi</h1>
        </div>
        <div className="w-[216px]">
          <button className="w-48 h-10 rounded-2xl font-bold text-white bg-[#0080FF] ms-6">
            {data.status ? "Aktif" : "Tidak Aktif"}
          </button>
          {/* Direction Train */}
          <div className="h-[164px] flex mt-9">
            <div className="flex flex-col mr-4 pt-1">
              <h1 className="mb-20 text-sm font-semibold">
                {data.waktuBerangkat}
              </h1>
              <h1 className="text-sm font-semibold">{data.waktuTiba}</h1>
            </div>
            <div className="mt-2 mr-2">
              <img src={assets.stepper} alt="" />
            </div>
            <div>
              <div className="mb-14">
                <h1 className="mb-1 font-semibold">{data.stasiunAsal}</h1>
                <h1 className="text-sm">{data.stasiunAsal}</h1>
              </div>
              <div>
                <h1 className="mb-1 font-semibold">{data.stasiunTujuan}</h1>
                <h1 className="text-sm">{data.stasiunTujuan}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardKA;

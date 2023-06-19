// ** Import Assets
import assets from "../../../assets/assets";

// ** Import Other
import { Link } from "react-router-dom";

const HeaderTambahHotel = (props) => {
  const { validate, setModal } = props;

  return (
    <div className="space-y-6 bg-white pt-7 pb-4 px-8">
      <h1 className="text-[34px] font-[700] text-[#262627]">Tambah Hotel</h1>

      <div className="flex items-center justify-between">
        <div
          className="flex items-center gap-2 ml-2 cursor-pointer"
          onClick={() =>
            setModal((prev) => {
              return { ...prev, back: true };
            })
          }
        >
          <img src={assets.iconKembaliDaftarKa} alt="back" />

          <h5 className="text-[#0080FF] text-[16px] mt-[1px]">Kembali</h5>
        </div>

        <button
          disabled={validate}
          onClick={() =>
            setModal((prev) => {
              return { ...prev, add: true };
            })
          }
          className="px-8 py-[13.5px] font-bold text-white disabled:bg-[#B3D9FF] bg-[#0080FF] flex gap-3 items-center rounded-lg disabled:cursor-not-allowed"
        >
          <h1 className="mt-[1.2px]">Tambah Data Hotel</h1>
          <img src={assets.iconSaveHotel} alt="button" />
        </button>
      </div>
    </div>
  );
};

export default HeaderTambahHotel;

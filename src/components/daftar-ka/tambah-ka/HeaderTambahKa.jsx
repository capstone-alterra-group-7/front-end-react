// ** Import Assets
import assets from "../../../assets/assets";

// ** Import Other
import { Link, useNavigate } from "react-router-dom";

const HeaderTambahKa = (props) => {
  const { validate, setModal, nav, setModalGerbong, isEdit } = props;

  const navigate = useNavigate();

  const handleModal = () => {
    if (isEdit) {
      setModal(true);
    } else {
      if (nav === "informasi") {
        setModal(true);
      } else if (nav === "gerbong") {
        setModalGerbong(true);
      }
    }
  };

  return (
    <div className="space-y-6 bg-white py-7 px-8 shadow-md">
      <h1 className="text-[34px] font-[700] text-[#262627]">
        {isEdit ? "Edit Kereta Api" : "Tambah Kereta Api"}
      </h1>

      <div className="flex items-center justify-between">
        {isEdit ? (
          <div
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 ml-2 cursor-pointer"
          >
            <img src={assets.iconKembaliDaftarKa} alt="back" />

            <h5 className="text-[#0080FF] text-[16px] mt-[1px]">Kembali</h5>
          </div>
        ) : (
          <div
            onClick={() => nav === "informasi" && navigate(-1)}
            className={`flex items-center gap-2 ml-2  ${
              nav === "informasi" ? "cursor-pointer" : "cursor-not-allowed"
            } `}
          >
            <img src={assets.iconKembaliDaftarKa} alt="back" />

            <h5 className="text-[#0080FF] text-[16px] mt-[1px]">Kembali</h5>
          </div>
        )}

        <button
          disabled={validate}
          onClick={handleModal}
          className="px-8 py-[13.5px] font-bold text-white disabled:bg-[#B3D9FF] bg-[#0080FF] flex gap-3 items-center rounded-lg disabled:cursor-not-allowed"
        >
          <h1 className="mt-[1.2px]">
            {isEdit
              ? "Simpan Informasi"
              : nav === "informasi"
              ? "Simpan Informasi"
              : "Simpan Gerbong"}
          </h1>
          <img src={assets.iconButtonDaftarKa} alt="button" />
        </button>
      </div>
    </div>
  );
};

export default HeaderTambahKa;

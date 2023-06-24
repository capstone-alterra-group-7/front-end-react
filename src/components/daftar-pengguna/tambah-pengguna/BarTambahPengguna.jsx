// ** Import Assets
import assets from "../../../assets/assets";

export default function xBarTambahPengguna({
  setModal,
  setModalBack,
  validate,
}) {
  return (
    <div className="flex justify-between items-center  px-7">
      <button className="flex items-center" onClick={() => setModalBack(true)}>
        <img src={assets.iconBackDaftarKa} alt="back" />
        <span className="ms-2 text-[#0080FF] text-[16px]">Kembali</span>
      </button>

      <div className="flex gap-3">
        <button
          className="px-8 py-3 font-[500] bg-[#0080FF] flex items-center gap-2 rounded-lg disabled:bg-[#8fc7ff] disabled:cursor-not-allowed"
          onClick={() => setModal(true)}
          disabled={validate}
        >
          <span className="ms-2 text-[16px] text-white ">Simpan Pengguna</span>

          <img src={assets.iconnav} alt="delete" />
        </button>
      </div>
    </div>
  );
}

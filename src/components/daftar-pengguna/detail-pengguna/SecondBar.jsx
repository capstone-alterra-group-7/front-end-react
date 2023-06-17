// ** Import Others
import { Link, useNavigate } from "react-router-dom";

// ** Import Assests
import assets from "../../../assets/assets";

export default function SecondBar(props) {
  const { setModal, data } = props;
  const Navigate = useNavigate("");
  const handleClick = () => {
    Navigate("/edit-pengguna", { state: data });
  };
  return (
    <div className="flex justify-between items-center">
      <div
        onClick={() => Navigate(-1)}
        className="text-[#0080FF] flex gap-2 items-center text-[16px] ml-[5px] cursor-pointer"
      >
        <img src={assets.iconBackDaftarKa} alt="back" />
        Kembali
      </div>

      <div className="flex gap-3">
        <button
          onClick={handleClick}
          className=" px-9 py-[9.5px] font-[500] text-[#4B4C4E] border border-[#D2D7E0] bg-[#F9FAFB] flex items-center rounded-lg"
        >
          <span className="me-2 text-[16px]">Edit</span>
          <img src={assets.iconEditDaftarKa} alt="edit" />
        </button>

        <button
          className="px-8 font-[500] bg-[#DB2D24] flex items-center gap-2 rounded-lg"
          onClick={() => setModal(true)}
        >
          <span className="ms-2 text-[16px] text-white ">Hapus Pengguna</span>

          <img src={assets.iconDeleteDaftarKa} alt="delete" />
        </button>
      </div>
    </div>
  );
}

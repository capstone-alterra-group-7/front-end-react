// ** Import Components
import ManyItems from "./nav/ManyItems";
import SingleItem from "./nav/SingleItem";

// ** Import Schema
import {
  dashboard,
  databases,
  laporan,
  transactions,
} from "../../schema/navigation";

// ** Import Ohter
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Swal.fire("Success", "Anda Telah Berhasil Logout", "success");

    sessionStorage.removeItem("token");

    navigate("/");
  };

  return (
    <div className="mt-[17px] px-7">
      <div className="space-y-10">
        <div className="bg-[#D9D9D9] p-6"></div>

        <SingleItem data={dashboard} />

        <ManyItems title="" datas={databases} />

        <ManyItems title="Transaksi" datas={transactions} />

        <ManyItems title="Laporan" datas={laporan} />
      </div>

      <button onClick={handleLogout} className="flex gap-3 px-4 py-14">
        <img src={dashboard.icon} alt="icon" />
        <h1 className="text-[16px] text-[#96989C] font-[500]">Logout</h1>
      </button>
    </div>
  );
};

export default Sidebar;

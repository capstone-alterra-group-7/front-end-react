// ** Import Components
import ManyItems from "./nav/ManyItems";
import SingleItem from "./nav/SingleItem";
import ModalConfirm from "../daftar-stasiun/ModalConfirm";

// ** Import React
import { useState } from "react";

// ** Import Schema
import { dashboard, databases, transactions } from "../../schema/navigation";

// ** Import Jotai
import { useAtom } from "jotai";
import { auth } from "../../jotai/auth";

// ** Import Ohter
import { useNavigate } from "react-router-dom";
import assets from "../../assets/assets";
import { customAlert } from "../../helpers/customAlert";

const Sidebar = () => {
  // ** Jotai State
  const [dataAuth, setLogout] = useAtom(auth);

  // ** Local State
  const [modal, setModal] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    customAlert(
      "https://gcdnb.pbrd.co/images/kDukVUpcEmuO.png?o=1",
      "Logout Berhasil",
      `Anda telah keluar dari sesi admin dengan aman..`
    );

    sessionStorage.removeItem("token");

    setLogout({ ...dataAuth, logout: false });
    navigate("/");
  };

  const handleModal = () => {
    setModal(true);
    setLogout({ ...dataAuth, logout: true });
  };

  return (
    <div className="mt-[20px] px-7 ">
      <div className="space-y-12">
        <div className="flex justify-center -ml-5">
          <img src={assets.logoTrip} alt="logo" />
        </div>

        <SingleItem data={dashboard} />

        <ManyItems title="Master Data" datas={databases} />

        <ManyItems title="Transaksi" datas={transactions} />
      </div>

      <button onClick={handleModal} className="flex gap-3 px-4  mt-36 pb-6">
        <img src={assets.iconLogout} alt="icon" />
        <h1 className="text-[16px] text-[#DB2D24] font-[500]">Logout</h1>
      </button>

      {modal && (
        <ModalConfirm
          setModal={setModal}
          handle={handleLogout}
          title="Logout dari Admin"
          desc="Apakah anda yakin ingin melakukan logout? sesi saat ini akan berakhir jika anda melakukan logout."
          bg="bg-[#DB2D24]"
          cancel="Batal"
          confirm="Tetap Logout"
        />
      )}
    </div>
  );
};

export default Sidebar;

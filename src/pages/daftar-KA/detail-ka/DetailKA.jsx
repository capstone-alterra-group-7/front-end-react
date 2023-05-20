// ** Import React
import { useState } from "react";

// ** Import Components
import { DetailKursi } from "../../../components/daftar-ka/detail-kursi/DetailKursi";
import BackDetailKa from "../../../components/daftar-ka/detail-ka/BackDetailKa";
import ButtonDetailKa from "../../../components/daftar-ka/detail-ka/ButtonDetailKa";
import Informasi from "../../../components/daftar-ka/detail-ka/Informasi";
import ModalDaftarKa from "../../../components/daftar-ka/ModalDaftarKa";
import NavDetailka from "../../../components/daftar-ka/NavDetailka";

// ** Import Redux
import { useDispatch } from "react-redux";
import { deleteKa } from "../../../redux/daftar-ka/daftarKaSlices";

// ** Import Other
import { useLocation, useNavigate } from "react-router-dom";

const DetailKA = () => {
  // ** Local State
  const [nav, setNav] = useState("informasi");
  const [modal, setModal] = useState(false);

  const {
    state: { data },
  } = useLocation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleDeleteKa = () => {
    dispatch(deleteKa(data.id));

    navigate("/daftar-ka");
  };

  return (
    <div className="bg-[#FFFFFF]">
      <div className="space-y-3">
        <div className="px-7 p-3">
          <h1 className=" text-[34px] font-bold">Detail KA</h1>

          <div className="pt-7 flex justify-between items-center">
            <BackDetailKa />

            <ButtonDetailKa setModal={setModal} />
          </div>
        </div>

        <NavDetailka nav={nav} setNav={setNav} />
      </div>

      {nav === "informasi" ? <Informasi data={data} /> : <DetailKursi />}

      {modal && (
        <ModalDaftarKa
          title="Ingin Menghapus Data KA?"
          description=" This blog post has been published. Team members will be able to edit this post and republish changes."
          bgButton="bg-[#DB2D24]"
          titleButton="Iya, Hapus"
          setModal={setModal}
          handle={handleDeleteKa}
        />
      )}
    </div>
  );
};

export default DetailKA;

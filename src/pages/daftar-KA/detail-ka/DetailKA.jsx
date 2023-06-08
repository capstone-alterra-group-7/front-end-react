// ** Import React
import { useState } from "react";

// ** Import Components
import { DetailKursi } from "../../../components/daftar-ka/detail-kursi/DetailKursi";
import BackDetailKa from "../../../components/daftar-ka/detail-ka/BackDetailKa";
import ButtonDetailKa from "../../../components/daftar-ka/detail-ka/ButtonDetailKa";
import Informasi from "../../../components/daftar-ka/detail-ka/Informasi";
import ModalDaftarKa from "../../../components/daftar-ka/ModalDaftarKa";
import NavDetailka from "../../../components/daftar-ka/NavDetailka";

// ** Import Other
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../services/base";
import { customAlert } from "../../../helpers/customAlert";
import ModalConfirm from "../../../components/daftar-stasiun/ModalConfirm";

const fetcher = (url) => axios.delete(url).then((res) => res.data);

const DetailKA = () => {
  // ** Local State
  const [nav, setNav] = useState("informasi");
  const [modal, setModal] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    state: { data },
  } = useLocation();

  const navigate = useNavigate();

  const handleDeleteKa = async () => {
    setLoading(true);

    fetcher(baseUrl(`/admin/train/${data.train_id}`))
      .then(() => {
        customAlert(
          "https://gcdnb.pbrd.co/images/UsggKXgrW4ny.png?o=1",
          "Data Dihapus",
          `Data kereta api ${data.name} telah berhasil dihapus dari sistem.`
        );

        setLoading(false);

        navigate("/daftar-ka");
      })
      .catch((err) => {
        setLoading(false);

        console.log(err);
      });
  };

  const handleEditKa = () => {
    navigate("/daftar-ka/tambah-ka", { state: data });
  };

  return (
    <div className="bg-[#FFFFFF] fixed overflow-y-auto left-0 right-0 h-full">
      <div className="space-y-3">
        <div className="px-7 p-3">
          <h1 className=" text-[34px] font-bold">Detail Kereta Api</h1>

          <div className="pt-7 flex justify-between items-center">
            <BackDetailKa />

            {data.deleted_at === "" && (
              <ButtonDetailKa setModal={setModal} setModalEdit={setModalEdit} />
            )}
          </div>
        </div>

        <NavDetailka nav={nav} setNav={setNav} isEdit={true} />
      </div>

      {nav === "informasi" ? (
        <Informasi data={data} />
      ) : (
        <DetailKursi data={data} />
      )}

      {modal && (
        <ModalConfirm
          setModal={setModal}
          loading={loading}
          handle={handleDeleteKa}
          title={"Menghapus Data Kereta Api"}
          desc={
            "Anda akan menghapus data kereta api ini. Apakah Anda yakin ingin melanjutkan? Tindakan ini tidak dapat diurungkan."
          }
          bg={"bg-[#DB2D24]"}
          cancel={"Batal"}
          confirm={"Hapus"}
        />
      )}

      {modalEdit && (
        <ModalConfirm
          setModal={setModalEdit}
          handle={handleEditKa}
          title={"Ubah Data Kereta Api"}
          desc={
            "Anda akan mengubah data kereta api ini. Apakah Anda yakin ingin melanjutkan?"
          }
          bg={"bg-[#0080FF]"}
          cancel={"Batal"}
          confirm={"Ubah"}
        />
      )}
    </div>
  );
};

export default DetailKA;

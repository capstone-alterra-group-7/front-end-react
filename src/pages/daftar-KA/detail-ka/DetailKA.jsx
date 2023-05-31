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
import { useSWRConfig } from "swr";
import { baseUrl } from "../../../services/base";
import Swal from "sweetalert2";

const fetcher = (url) => axios.delete(url).then((res) => res.data);

const DetailKA = () => {
  // ** Local State
  const [nav, setNav] = useState("informasi");
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { mutate } = useSWRConfig();

  const {
    state: { data },
  } = useLocation();

  const navigate = useNavigate();

  const handleDeleteKa = async () => {
    setLoading(true);

    fetcher(baseUrl(`/admin/train/${data.train_id}`))
      .then((res) => {
        Swal.fire("Success", `${res.message}`, "success");

        mutate("/admin/train");

        setLoading(false);

        navigate("/daftar-ka");
      })
      .catch((err) => {
        setLoading(false);

        console.log(err);
      });
  };

  return (
    <div className="bg-[#FFFFFF] fixed overflow-y-auto left-0 right-0 h-full">
      <div className="space-y-3">
        <div className="px-7 p-3">
          <h1 className=" text-[34px] font-bold">Detail Kereta Api</h1>

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
          loading={loading}
          handle={handleDeleteKa}
        />
      )}
    </div>
  );
};

export default DetailKA;

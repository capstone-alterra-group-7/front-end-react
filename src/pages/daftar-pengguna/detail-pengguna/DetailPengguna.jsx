// ** Import Components
import SecondBar from "../../../components/daftar-pengguna/detail-pengguna/SecondBar";
import CardProfile from "../../../components/daftar-pengguna/detail-pengguna/CardProfile";
import ModalDaftarPengguna from "../../../components/daftar-pengguna/ModalDaftarPengguna";

// ** Import Others
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import useSWR from "swr";
import axios from "axios";
import { baseUrl } from "../../../services/base";
import { customAlert } from "../../../helpers/customAlert";

const fetcher = (url) => axios.get(url).then((res) => res.data);

export default function DetailPengguna() {
  const [modal, setModal] = useState(false);
  const [isDelete, setIsDelete] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const {
    state: { data },
  } = useLocation();

  const {
    data: detailPengguna,
    mutate,
    isLoading,
  } = useSWR(
    baseUrl(
      `/admin/user/detail?id=${data.id}&isDeleted=${
        isDelete || (data.deleted_at !== "" && true)
      }`
    ),
    fetcher
  );

  return (
    <div className=" fixed overflow-y-auto left-0 right-0 h-full">
      <div className="bg-white px-7 pt-3 pb-6 space-y-6">
        <h1 className="text-[32px] font-bold">Detail Pengguna</h1>

        {isLoading ? null : <SecondBar setModal={setModal} data={data} />}
      </div>

      <CardProfile
        data={data}
        isDelete={isDelete}
        detailPengguna={detailPengguna}
      />

      {modal && (
        <ModalDaftarPengguna
          title="Hapus Data Pengguna?"
          description=" This blog post has been published. Team members will be able to edit this post and republish changes."
          bgButton="bg-[#DB2D24]"
          titleButton="Iya, Hapus"
          setModal={setModal}
          handle={handleDelete}
        />
      )}
    </div>
  );
}

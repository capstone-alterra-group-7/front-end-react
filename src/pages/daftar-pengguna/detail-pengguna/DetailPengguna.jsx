// ** Import Components
import SecondBar from "../../../components/daftar-pengguna/detail-pengguna/SecondBar";
import CardProfile from "../../../components/daftar-pengguna/detail-pengguna/CardProfile";
import ModalDaftarPengguna from "../../../components/daftar-pengguna/ModalDaftarPengguna";

// ** Import Others
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

// ** Import Redux
import { useDispatch } from "react-redux";
import { hapusPengguna } from "../../../redux/daftar-pengguna/daftarPenggunaSlices";
import axios from "axios";
import { baseUrl } from "../../../services/base";
import Swal from "sweetalert2";

const fetcher = (url) => axios.delete(url).then((res) => res.data)

export default function DetailPengguna() {
  const [modal, setModal]= useState(false)
  const [loading, setLoading] = useState(false)

  const dispatch = useDispatch()

  const Navigate = useNavigate()

  const {
    state: { data },
  } = useLocation();

  const handleDelete = async () => {
    setLoading(true)

    fetcher(baseUrl(`/user/delete-photo-profile/${data.id}`))
      .then((res) => {
        Swal.fire("Success", `${res.message}`, "success")

        setLoading(false)

        Navigate("/daftar-pengguna")
      })
      .catch((err) => {
        setLoading(false)

        console.log(err);
      })

  }

  return (
    <div className=" fixed overflow-y-auto left-0 right-0 h-full">
        <div className="bg-white px-7 pt-3 pb-6 space-y-6">

          <h1 className="text-[32px] font-bold">Detail Pengguna</h1>
            
          <SecondBar setModal={setModal}/>
        </div>
        
        <CardProfile data={data}/>

        {modal &&
        <ModalDaftarPengguna
          title="Hapus Data Pengguna?"
          description=" This blog post has been published. Team members will be able to edit this post and republish changes."
          bgButton="bg-[#DB2D24]"
          titleButton="Iya, Hapus"
          setModal={setModal}
          handle={handleDelete}
          />
        }
    </div>
  )
}

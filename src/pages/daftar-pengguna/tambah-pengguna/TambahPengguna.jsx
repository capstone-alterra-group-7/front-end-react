// ** Import Components
import ModalDaftarPengguna from "../../../components/daftar-pengguna/ModalDaftarPengguna";
import BarTambahPengguna from "../../../components/daftar-pengguna/tambah-pengguna/BarTambahPengguna";
import FormTambahPengguna from "../../../components/daftar-pengguna/tambah-pengguna/FormTambahPengguna";
import ModalBack from "../../../components/daftar-pengguna/ModalBack";

// ** Import Others
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tambahPengguna } from "../../../redux/daftar-pengguna/daftarPenggunaSlices";
import { baseUrl } from "../../../services/base";
import axios from "axios";
import Swal from "sweetalert2";

const fetcherTambahPengguna = (url, payload) => axios.post(url, payload).then((res) => res.data)

const TambahPengguna = () => {
  
    const [modal, setModal] = useState(false);
    const [modalBack, setModalBack] = useState(false);
    const [loading, setLoading] = useState(false)

    const [input, setInput] = useState({
      email: "",
      password: "",
      confirm_password: "",
      full_name: "",
      phone_number: "",
      birth_date: "",
    })

    const onChangePengguna = (e) => {
      setInput({...input, [e.target.name] : e.target.value})
    }

    const validateData =
      input.email === "" ||
      input.password === "" ||
      input.confirm_password === "" ||
      input.full_name === "" || 
      input.phone_number === "" || 
      input.birth_date === "" 
    
    const navigate = useNavigate()

    const handleAdd = () => {
      setLoading(true)

      fetcherTambahPengguna(baseUrl("/admin/user/register"), {
        email: input.email,
        password: input.password,
        confirm_password: input.confirm_password,
        full_name: input.full_name,
        phone_number: input.phone_number,
      })
      .then(() => {
        Swal.fire("Success", "Data Telah Ditambahkan", "success");

        setLoading(false);

        navigate("/daftar-pengguna");
      })
      .catch((err) => console.log(err));
    }

    const handleBack = () => {
      navigate("/daftar-pengguna")
    }

  return (
    <div className="fixed overflow-y-auto left-0 right-0 h-full">
        <div className="bg-white px-7 pt-3 pb-6 space-y-6">

          <h1 className="text-[32px] font-bold">Tambah Pengguna</h1>
            
          <BarTambahPengguna 
            setModal={setModal}
            setModalBack={setModalBack}
            validate={validateData}/>
        </div>
        <FormTambahPengguna
          input={input}
          onChangePengguna={onChangePengguna}/>

        {modal && (
            <ModalDaftarPengguna
                title="Simpan Data Pengguna?"
                description=" This blog post has been published. Team members will be able to edit this post and republish changes."
                bgButton="bg-[#0080FF]"
                titleButton="Iya, Simpan Data"
                setModal={setModal}
                handle={handleAdd} />
        )}

        {modalBack && (
          <ModalBack
            title="Batalkan Menyimpan Pengguna?"
            description=" This blog post has been published. Team members will be able to edit this post and republish changes."
            bgButton="bg-[#DB2D24]"
            titleButton="Batal Menyimpan"
            setModalBack={setModalBack}
            handle={handleBack}/>
        )}
    </div>
  )
}

export default TambahPengguna

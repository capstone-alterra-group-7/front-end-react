// ** Import Components
import ModalDaftarPengguna from "../../../components/daftar-pengguna/ModalDaftarPengguna";
import BarTambahPengguna from "../../../components/daftar-pengguna/tambah-pengguna/BarTambahPengguna";
import FormTambahPengguna from "../../../components/daftar-pengguna/tambah-pengguna/FormTambahPengguna";
import ModalBack from "../../../components/daftar-pengguna/ModalBack";

// ** Import Others
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../services/base";
import axios from "axios";
import { customAlert } from '../../../helpers/customAlert'

const fetcherAdd = (url, payload) =>
  axios.post(url, payload).then((res) => res.data);

const TambahPengguna = () => {
    const { state } = useLocation()
  
    const [modal, setModal] = useState(false);
    const [modalBack, setModalBack] = useState(false);
    const [loading, setLoading] = useState(false)

    const dataEdit = {
      email: state?.email,
      password: state?.password,
      confirm_password: state?.confirm_password,
      full_name: state?.full_name,
      phone_number: state?.phone_number,
      birth_date: state?.birth_date,
      is_active: state?.is_active
    }

    const [input, setInput] = useState({
      email: "",
      password: "",
      confirm_password: "",
      full_name: "",
      phone_number: "",
      birth_date: "",
      role: "user",
      is_active: "",
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
      input.birth_date === "" ||
      input.is_active == "" 
    
    const navigate = useNavigate()

    console.log(input);

    const handleAdd = async (e) => {
      e.preventDefault()
      setLoading(true)

      fetcherAdd(baseUrl("/admin/user/register"), {
        email: input.email,
        password: input.password,
        confirm_password: input.confirm_password,
        full_name: input.full_name,
        phone_number: input.phone_number,
        is_active: input.is_active,
        role: "user",
      })
      .then((res) => {
        const {
          data: { full_name },
        } = res;

        customAlert(
          "https://gcdnb.pbrd.co/images/2R7PmnlXkvSE.png?o=1",
          "Data Ditambahkan",
          `Data Pengguna ${full_name} berhasil ditambahkan ke dalam sistem.`
        );

        setLoading(false);

        navigate("/daftar-pengguna");
      })
      .catch((err) => {
          setLoading(false);
          console.log(err) });
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
          onChangePengguna={onChangePengguna}
          edit={state}
          setInput={setInput}
          dataEdit={dataEdit}/>

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

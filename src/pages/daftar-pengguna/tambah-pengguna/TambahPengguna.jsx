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

const TambahPengguna = () => {
  
    const [modal, setModal] = useState(false);
    const [modalBack, setModalBack] = useState(false);

    const [input, setInput] = useState({
      email: "",
      password: "",
      confirmPassword: "",
      nama: "",
      noTelp: "",
      tanggalLahir: "",
    })

    const onChangePengguna = (e) => {
      setInput({...input, [e.target.name] : e.target.value})
    }

    const validateData =
      input.email === "" ||
      input.password === "" ||
      input.confirmPassword === "" ||
      input.nama === "" || 
      input.noTelp === "" || 
      input.tanggalLahir === "" 
    
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const handleAdd = () => {
        dispatch(tambahPengguna({ id: Math.random(), ...input}))
        navigate("/daftar-pengguna")
    }

    const handleBack = () => {
      navigate("/daftar-pengguna")
    }
  return (
    <div className="relative">
        <div className="bg-white px-7 pt-3 pb-6 space-y-6">

          <h1 className="text-[34px] font-bold">Tambah Pengguna</h1>
            
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

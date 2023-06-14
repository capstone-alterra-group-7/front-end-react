// ** Import React
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

// **Import Components
import BarEditPengguna from '../../../components/daftar-pengguna/edit-pengguna/BarEditPengguna'
import FormEditPengguna from '../../../components/daftar-pengguna/edit-pengguna/FormEditPengguna'
import ModalBack from '../../../components/daftar-pengguna/ModalBack'
import ModalDaftarPengguna from '../../../components/daftar-pengguna/ModalDaftarPengguna'

const fetcherEdit = (url, payload) =>
  axios.put(url, payload).then((res) => res.data)

export default function EditPengguna() {
  const [modalBack, setModalBack] = useState(false)
  const [modal, setModal] = useState(false)
  const [loading, setLoading] = useState(false)

  const Navigate = useNavigate()

  const handleBack = () => {
    Navigate("/daftar-pengguna")
  }

  const handleAdd = () => {
    setLoading(true)

    fetcherEdit(baseUrl(`/admin/user/update/${dataEdit.id}`), {
      email: dataEdit.email,
      password: input.password,
      confirm_password: input.confirm_password,
      full_name: input.full_name,
      birth_date: input.birth_date,
      phone_number: input.phone_number,
      is_active: input.is_active,
    })
    .then((res) => {
      const {
        data: { full_name },
      } = res

      Navigate("/daftar-pengguna")

      customAlert(
        "https://gcdnb.pbrd.co/images/k8Jd9tS7Ufog.png?o=1",
        "Perubahan Tersimpan",
        `Perubahan pada data kereta api ${full_name} telah berhasil disimpan.`
      );
      setModal(false);

      setLoading(false);
    })
    .catch((err) => {
      setLoading(false);
      console.log(err);

    })
  }
  return (
    <div className="fixed overflow-y-auto left-0 right-0 h-full">
        <div className="bg-white px-7 pt-3 pb-6 space-y-6">

            <h1 className="text-[34px] font-bold">Edit Pengguna</h1>
                
            <BarEditPengguna 
              setModal={setModal}
              setModalBack={setModalBack}/>
        </div>

        <FormEditPengguna/>

        {modal && (
          <ModalDaftarPengguna
            title="Simpan Data Pengguna?"
            description=" This blog post has been published. Team members will be able to edit this post and republish changes."
            bgButton="bg-[#0080FF]"
            titleButton="Iya, Simpan Data"
            setModal={setModal}
            handle={handleAdd}
          />
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

// ** Import React
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// **Import Components
import BarEditPengguna from '../../../components/daftar-pengguna/edit-pengguna/BarEditPengguna'
import FormEditPengguna from '../../../components/daftar-pengguna/edit-pengguna/FormEditPengguna'
import ModalBack from '../../../components/daftar-pengguna/ModalBack'
import ModalDaftarPengguna from '../../../components/daftar-pengguna/ModalDaftarPengguna'

export default function EditPengguna() {
  const [modalBack, setModalBack] = useState(false)
  const [modal, setModal] = useState(false)

  const Navigate = useNavigate()

  const handleBack = () => {
    Navigate("/daftar-pengguna")
  }

  const handleAdd = () => {
    Navigate("/detail-pengguna")
  }

  return (
    <div className="relative">
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

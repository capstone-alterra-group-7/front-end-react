// ** Import React
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { baseUrl } from "../../../services/base";

// **Import Components
import BarEditPengguna from "../../../components/daftar-pengguna/edit-pengguna/BarEditPengguna";
import FormEditPengguna from "../../../components/daftar-pengguna/edit-pengguna/FormEditPengguna";
import ModalBack from "../../../components/daftar-pengguna/ModalBack";
import ModalDaftarPengguna from "../../../components/daftar-pengguna/ModalDaftarPengguna";
import { customAlert } from '../../../helpers/customAlert'

const fetcherEdit = (url, payload) =>
  axios.put(url, payload).then((res) => res.data);

export default function EditPengguna() {
  const [modalBack, setModalBack] = useState(false);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();

  const Navigate = useNavigate();

  const handleBack = () => {
    Navigate("/daftar-pengguna");
  };
  
  const onChangePengguna = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [input, setInput] = useState({
    id: state?.id ,
    email: state?.email,
    password: "",
    confirm_password: "",
    full_name: state?.full_name,
    phone_number: state?.phone_number,
    birth_date: state?.birth_date,
    is_active: state?.is_active,
    role: "user",
  });

  // const validateData =
  //   input.email === "" ||
  //   input.password === "" ||
  //   input.confirm_password === "" ||
  //   input.full_name === "" ||
  //   input.phone_number === "" ||
  //   input.birth_date === "" ||
  //   input.password !== input.confirm_password;

  const handleEdit = () => {
    setLoading(true);

    fetcherEdit(baseUrl(`/admin/user/update/${input.id}`), {
      id: input.id,
      birth_date: input.birth_date,
      confirm_password: input.confirm_password,
      email: input.email,
      full_name: input.full_name,
      is_active: input.is_active,
      password: input.password,
      phone_number: input.phone_number,
      role: "user",
    })
      .then((res) => {
        const {
          data: { full_name },
        } = res;

        Navigate("/daftar-pengguna");

        customAlert(
          "https://gcdnb.pbrd.co/images/k8Jd9tS7Ufog.png?o=1",
          "Perubahan Tersimpan",
          `Perubahan pada data pengguna ${full_name} telah berhasil disimpan.`
        );
        setModal(false);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <div className="fixed overflow-y-auto left-0 right-0 h-full">
      <div className="bg-white px-7 pt-3 pb-6 space-y-6">
        <h1 className="text-[34px] font-bold">Edit Pengguna</h1>

        <BarEditPengguna
          // validate={validateData}
          setModal={setModal}
          setModalBack={setModalBack}
        />
      </div>

      <FormEditPengguna 
        setInput={setInput} 
        input={input} 
        data={state}
        onChangePengguna={onChangePengguna} />

      {modal && (
        <ModalDaftarPengguna
          title="Simpan Data Pengguna?"
          description=" This blog post has been published. Team members will be able to edit this post and republish changes."
          bgButton="bg-[#0080FF]"
          titleButton="Iya, Simpan Data"
          setModal={setModal}
          handle={handleEdit}
        />
      )}

      {modalBack && (
        <ModalBack
          title="Batalkan Menyimpan Pengguna?"
          description=" This blog post has been published. Team members will be able to edit this post and republish changes."
          bgButton="bg-[#DB2D24]"
          titleButton="Batal Menyimpan"
          setModalBack={setModalBack}
          handle={handleBack}
        />
      )}
    </div>
  );
}

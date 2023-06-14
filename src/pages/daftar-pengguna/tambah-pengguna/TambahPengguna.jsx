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
import { customAlert } from "../../../helpers/customAlert";

const fetcherAdd = (url, payload) =>
  axios.post(url, payload).then((res) => res.data);

const TambahPengguna = () => {
  const { state } = useLocation();

  const [modal, setModal] = useState(false);
  const [modalBack, setModalBack] = useState(false);
  const [loading, setLoading] = useState(false);

  const dataEdit = {
    email: state?.email,
    password: state?.password,
    confirm_password: state?.confirm_password,
    full_name: state?.full_name,
    phone_number: state?.phone_number,
    birth_date: state?.birth_date,
    is_active: state?.is_active,
  };

  const [input, setInput] = useState({
    email: "",
    password: "",
    confirm_password: "",
    full_name: "",
    phone_number: "",
    birth_date: "",
    is_active: false,
  });

  const onChangePengguna = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validateData =
    input.email === "" ||
    input.password === "" ||
    input.confirm_password === "" ||
    input.full_name === "" ||
    input.phone_number === "" ||
    input.birth_date === "" ||
    input.password !== input.confirm_password;

  const navigate = useNavigate();

  const handleAdd = () => {
    setLoading(true);

    fetcherAdd(baseUrl("/admin/user/register"), {
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
        console.log(err);
      });
  };

  const handleBack = () => {
    navigate("/daftar-pengguna");
  };

  return (
    <div className="fixed overflow-y-auto left-0 right-0 h-full">
      <div className="bg-white px-7 pt-3 pb-6 space-y-6">
        <h1 className="text-[32px] font-bold">Tambah Pengguna</h1>

        <BarTambahPengguna
          setModal={setModal}
          setModalBack={setModalBack}
          validate={validateData}
        />
      </div>
      <FormTambahPengguna
        input={input}
        onChangePengguna={onChangePengguna}
        edit={state}
        setInput={setInput}
        dataEdit={dataEdit}
      />

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
          handle={handleBack}
        />
      )}
    </div>
  );
};

export default TambahPengguna;

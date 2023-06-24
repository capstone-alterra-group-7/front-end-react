// ** Import Components
import BarTambahPengguna from "../../../components/daftar-pengguna/tambah-pengguna/BarTambahPengguna";
import FormTambahPengguna from "../../../components/daftar-pengguna/tambah-pengguna/FormTambahPengguna";
import ModalConfirm from "../../../globals/ModalConfirm";

// ** Import Others
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../services/base";
import { customAlert } from "../../../helpers/customAlert";
import { fetcherPost } from "../../../services/fetcher/fetcher";
import Swal from "sweetalert2";
import moment from "moment";

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

  const date = new Date();

  const validateTanggalLahir = moment(date).isBefore(input.birth_date);

  const validateData =
    input.email === "" ||
    input.password === "" ||
    input.confirm_password === "" ||
    input.full_name === "" ||
    input.phone_number === "" ||
    input.birth_date === "" ||
    input.password !== input.confirm_password ||
    input.password.length < 8 ||
    validateTanggalLahir;

  const navigate = useNavigate();

  const handleAdd = () => {
    setLoading(true);

    fetcherPost(baseUrl("/admin/user/register"), {
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
        const {
          response: { data },
        } = err;

        setModal(false);

        setLoading(false);

        Swal.fire(`Email Sudah Digunakan`, `${data.message}`, "error");

        console.log(data);
      });
  };

  const handleBack = () => {
    navigate("/daftar-pengguna");
  };

  return (
    <div className="absolute left-0 right-0 h-full">
      <div className="bg-white pt-3 pb-5 space-y-6 border-b">
        <h1 className="text-[32px] font-bold  px-7">Tambah Pengguna</h1>

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
        <ModalConfirm
          setModal={setModal}
          handle={handleAdd}
          loading={loading}
          title={"Simpan Data Pengguna?"}
          desc={
            "Anda akan menyimpan data pengguna baru. Apakah Anda yakin ingin melanjutkan?"
          }
          bg={"bg-[#0080FF]"}
          cancel={"Batal"}
          confirm={"Simpan"}
        />
      )}

      {modalBack && (
        <ModalConfirm
          setModal={setModalBack}
          handle={handleBack}
          title={"Batal Menambahkan Data Pengguna"}
          desc={
            "Anda akan membatalkan penambahan data pengguna .Apakah Anda yakin ingin melanjutkan?"
          }
          bg={"bg-[#DB2D24]"}
          cancel={"Tutup"}
          confirm={"Batalkan"}
        />
      )}
    </div>
  );
};

export default TambahPengguna;

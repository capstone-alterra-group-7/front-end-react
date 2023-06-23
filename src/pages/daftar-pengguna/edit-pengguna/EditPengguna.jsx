// ** Import React
import { useState } from "react";

// **Import Components
import BarEditPengguna from "../../../components/daftar-pengguna/edit-pengguna/BarEditPengguna";
import FormEditPengguna from "../../../components/daftar-pengguna/edit-pengguna/FormEditPengguna";
import { customAlert } from "../../../helpers/customAlert";
import ModalConfirm from "../../../globals/ModalConfirm";

// ** Import React
import { useLocation, useNavigate } from "react-router-dom";
import { baseUrl } from "../../../services/base";
import { fetcherPut } from "../../../services/fetcher/fetcher";

export default function EditPengguna() {
  const [modalBack, setModalBack] = useState(false);
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);

  const { state } = useLocation();

  console.log(state);

  const Navigate = useNavigate();

  const handleBack = () => {
    Navigate("/daftar-pengguna");
  };

  const onChangePengguna = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const [input, setInput] = useState({
    email: state?.email,
    full_name: state?.full_name,
    phone_number: state?.phone_number,
    birth_date: state?.birth_date,
    is_active: state.deleted_at === "" ? false : true,
    role: "user",
  });

  const validateData =
    input.email === "" ||
    input.full_name === "" ||
    input.phone_number === "" ||
    input.birth_date === "" ||
    input.password !== input.confirm_password;

  const handleEdit = () => {
    setLoading(true);

    fetcherPut(baseUrl(`/admin/user/update/${state.id}`), {
      birth_date: input.birth_date,
      email: input.email,
      full_name: input.full_name,
      is_active: input.is_active,
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
          validate={validateData}
          setModal={setModal}
          setModalBack={setModalBack}
        />
      </div>

      <FormEditPengguna
        setInput={setInput}
        input={input}
        data={state}
        onChangePengguna={onChangePengguna}
      />

      {modal && (
        <ModalConfirm
          setModal={setModal}
          handle={handleEdit}
          loading={loading}
          title={"Simpan Perubahan Data Pengguna"}
          desc={
            "Anda akan menyimpan perubahan pada data pengguna . Apakah Anda yakin ingin melanjutkan?"
          }
          bg={"bg-[#0080FF]"}
          cancel={"Batal"}
          confirm={"Simpan Perubahan"}
        />
      )}

      {modalBack && (
        <ModalConfirm
          setModal={setModalBack}
          handle={handleBack}
          title={"Batal Mengubah Data Pengguna"}
          desc={
            "Anda akan membatalkan perubahan data pengguna . Apakah Anda yakin ingin melanjutkan?"
          }
          bg={"bg-[#DB2D24]"}
          cancel={"Tutup"}
          confirm={"Batalkan"}
        />
      )}
    </div>
  );
}

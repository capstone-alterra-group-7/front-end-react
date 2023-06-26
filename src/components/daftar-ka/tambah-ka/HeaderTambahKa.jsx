// ** Import Assets
import { useState } from "react";
import assets from "../../../assets/assets";

// ** Import Components
import ModalConfirm from "../../../globals/ModalConfirm";

// ** Import Other
import { useNavigate } from "react-router-dom";

const HeaderTambahKa = (props) => {
  const { validate, setModal, nav, setModalGerbong, isEdit } = props;

  // ** Local State
  const [modalBack, setModalBack] = useState(false);

  const navigate = useNavigate();

  const handleModal = () => {
    if (isEdit) {
      setModal(true);
    } else {
      if (nav === "informasi") {
        setModal(true);
      } else if (nav === "gerbong") {
        setModalGerbong(true);
      }
    }
  };

  const handleBackModal = () => {
    navigate(-1);
  };

  return (
    <div className="space-y-6 bg-white py-7 px-8 shadow-md">
      <h1 className="text-[34px] font-[700] text-[#262627]">
        {isEdit ? "Edit Kereta Api" : "Tambah Kereta Api"}
      </h1>

      <div className="flex items-center justify-between">
        {isEdit ? (
          <div
            onClick={() => setModalBack(true)}
            className="flex items-center gap-2 ml-2 cursor-pointer"
          >
            <img src={assets.iconKembaliDaftarKa} alt="back" />

            <h5 className="text-[#0080FF] text-[16px] mt-[1px]">Kembali</h5>
          </div>
        ) : (
          <button
            disabled={nav === "gerbong"}
            onClick={() => setModalBack(true)}
            className={`flex items-center gap-2 ml-2 disabled:cursor-not-allowed`}
          >
            <img src={assets.iconKembaliDaftarKa} alt="back" />

            <h5 className="text-[#0080FF] text-[16px] mt-[1px]">Kembali</h5>
          </button>
        )}

        <button
          disabled={validate}
          onClick={handleModal}
          className="px-6 py-[11.5px] font-bold text-white disabled:bg-[#B3D9FF] bg-[#0080FF] flex gap-3 items-center rounded-lg disabled:cursor-not-allowed"
        >
          <h1 className="mt-[1.2px]">
            {isEdit
              ? "Simpan Perubahan KA"
              : nav === "informasi"
              ? "Lanjutkan"
              : "Simpan KA"}
          </h1>
          {isEdit ? (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 5.5H2.16667V2.16667H10.5V5.5ZM8 13.8333C7.33696 13.8333 6.70107 13.5699 6.23223 13.1011C5.76339 12.6323 5.5 11.9964 5.5 11.3333C5.5 10.6703 5.76339 10.0344 6.23223 9.56557C6.70107 9.09672 7.33696 8.83333 8 8.83333C8.66304 8.83333 9.29893 9.09672 9.76777 9.56557C10.2366 10.0344 10.5 10.6703 10.5 11.3333C10.5 11.9964 10.2366 12.6323 9.76777 13.1011C9.29893 13.5699 8.66304 13.8333 8 13.8333ZM12.1667 0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.2754 0.675595 14.6993 0.988155 15.0118C1.30072 15.3244 1.72464 15.5 2.16667 15.5H13.8333C14.2754 15.5 14.6993 15.3244 15.0118 15.0118C15.3244 14.6993 15.5 14.2754 15.5 13.8333V3.83333L12.1667 0.5Z"
                fill="white"
              />
            </svg>
          ) : nav === "informasi" ? (
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.00004 13.6668L5.81254 12.5002L10.4792 7.8335H0.333374V6.16683H10.4792L5.81254 1.50016L7.00004 0.333496L13.6667 7.00016L7.00004 13.6668Z"
                fill="white"
              />
            </svg>
          ) : (
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.5 5.5H2.16667V2.16667H10.5V5.5ZM8 13.8333C7.33696 13.8333 6.70107 13.5699 6.23223 13.1011C5.76339 12.6323 5.5 11.9964 5.5 11.3333C5.5 10.6703 5.76339 10.0344 6.23223 9.56557C6.70107 9.09672 7.33696 8.83333 8 8.83333C8.66304 8.83333 9.29893 9.09672 9.76777 9.56557C10.2366 10.0344 10.5 10.6703 10.5 11.3333C10.5 11.9964 10.2366 12.6323 9.76777 13.1011C9.29893 13.5699 8.66304 13.8333 8 13.8333ZM12.1667 0.5H2.16667C1.24167 0.5 0.5 1.25 0.5 2.16667V13.8333C0.5 14.2754 0.675595 14.6993 0.988155 15.0118C1.30072 15.3244 1.72464 15.5 2.16667 15.5H13.8333C14.2754 15.5 14.6993 15.3244 15.0118 15.0118C15.3244 14.6993 15.5 14.2754 15.5 13.8333V3.83333L12.1667 0.5Z"
                fill="white"
              />
            </svg>
          )}
        </button>
      </div>

      {modalBack && (
        <ModalConfirm
          setModal={setModalBack}
          handle={handleBackModal}
          title={
            isEdit
              ? "Batal Mengubah Data Kereta Api"
              : "Batal Menambahkan Data Kereta Api"
          }
          desc={
            isEdit
              ? "Anda akan membatalkan perubahan data kereta api . Apakah Anda yakin ingin melanjutkan?"
              : "Anda akan membatalkan penambahan data kereta api. Apakah Anda yakin ingin melanjutkan?"
          }
          bg="bg-[#DB2D24]"
          cancel="Tutup"
          confirm="Batalkan"
        />
      )}
    </div>
  );
};

export default HeaderTambahKa;

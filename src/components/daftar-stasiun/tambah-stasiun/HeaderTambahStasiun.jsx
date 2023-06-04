import React, { useState } from "react";

import assets from "../../../assets/assets";
import { useNavigate } from "react-router-dom";
import ModalConfirm from "../ModalConfirm";

const HeaderTambahStasiun = ({ setModal, validate, validateBtnBack }) => {
  const [modalBack, setModalBack] = useState(false);
  const navigate = useNavigate();

  const handleBack = () => {
    validateBtnBack ? navigate("/daftar-stasiun") : setModalBack(true);
  };

  const handleBackModal = () => {
    navigate("/daftar-stasiun");
  };

  return (
    <div>
      <div className="space-y-6 bg-white pt-7 pb-4 px-8">
        <h1 className="text-[34px] font-[700] text-[#262627]">Tambah Stasiun</h1>

        <div className="flex items-center justify-between">
          <button onClick={handleBack} className="flex items-center gap-2 ml-2">
            <img src={assets.iconKembaliDaftarKa} alt="back" />

            <h5 className="text-[#0080FF] text-[16px] mt-[1px]">Kembali</h5>
          </button>

          <button
            disabled={validate}
            onClick={() => setModal(true)}
            className="px-8 py-[13.5px] font-bold text-white disabled:bg-[#B3D9FF] bg-[#0080FF] flex gap-3 items-center rounded-lg disabled:cursor-not-allowed"
          >
            <h1 className="mt-[1.2px]">Tambah Data Stasiun</h1>
            <img src={assets.iconSaveHotel} alt="button" />
          </button>
        </div>
      </div>

      {modalBack && (
        <ModalConfirm
          setModal={setModalBack}
          handle={handleBackModal}
          title="Kembali Ke Daftar Stasiun?"
          desc="Anda akan membatalkan penambahan data stasiun. Apakah Anda yakin ingin melanjutkan?"
          bg="bg-[#DB2D24]"
          cancel="Tutup"
          confirm="Batalkan"
        />
      )}
    </div>
  );
};

export default HeaderTambahStasiun;

import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// ** Import Components
import HeaderTambahStasiun from "../../../components/daftar-stasiun/tambah-stasiun/HeaderTambahStasiun";
import Policy from "../../../components/daftar-hotel/tambah-hotel/kebijakan-kamar/Policy";
import { tambahStasiun } from "../../../redux/daftar-stasiun/daftarStasiunSlices";
import ModalConfirm from "../../../components/daftar-stasiun/ModalConfirm";

const TambahStasiun = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ** Local State
  const [clicked, setClicked] = useState({ stasiun_aktif: false });
  const description = { aktif: "Stasiun Masih Aktif", nonAktif: "Stasiun Tidak Aktif" };

  const [input, setInput] = useState({
    is_active: clicked.stasiun_aktif,
    code: "",
    station_name: "",
  });

  useEffect(() => {
    setInput((prev) => {
      return { ...prev, is_active: clicked.stasiun_aktif };
    });
  }, [clicked]);

  const handleTambahStasiun = () => {
    dispatch(tambahStasiun({ id: Math.floor(Math.random() * 100), station_number: "00003", ...input }));
    alert("Sukses Menambahkan Stasiun Baru");
    navigate("/daftar-stasiun");
  };

  const validate = input.code === "" || input.station_name === "";
  const validateBtnBack = input.code === "" && input.station_name === "";

  const [modal, setModal] = useState(false);

  return (
    <div className="bg-[#FFFFFF] fixed overflow-y-auto left-0 right-0 h-full">
      <HeaderTambahStasiun setModal={setModal} validate={validate} validateBtnBack={validateBtnBack} />

      <div className="bg-[#EBEDF1] px-36 py-12">
        <div className="p-8 bg-white rounded-[2rem] mb-7 h-[44.75rem]">
          <Policy clicked={clicked} setClicked={setClicked} title={"Keaktifan Stasiun"} name={"stasiun_aktif"} desc={clicked.stasiun_aktif ? description.aktif : description.nonAktif} />

          <div className="mt-8 flex gap-6">
            <div className="mb-12 w-1/3">
              <label htmlFor="kodeStasiun" className="text-sm font-bold">
                Kode Stasiun
              </label>
              <div className={`flex mt-2 h-11  rounded-lg border border-[#D2D7E0]`}>
                <input
                  type="text"
                  className="px-3 py-[0.625rem] w-full rounded-lg"
                  placeholder="Masukan Kode Stasiun"
                  onChange={(e) => {
                    setInput((prev) => {
                      return { ...prev, code: e.target.value };
                    });
                  }}
                />
              </div>
            </div>

            <div className="mb-12 w-2/3">
              <label htmlFor="kodeStasiun" className="text-sm font-bold">
                Nama Stasiun
              </label>
              <div className={`flex mt-2 h-11  rounded-lg border border-[#D2D7E0]`}>
                <input
                  type="text"
                  className="px-3 py-[0.625rem] w-full rounded-lg"
                  placeholder="Masukan Nama Stasiun"
                  onChange={(e) => {
                    setInput((prev) => {
                      return { ...prev, station_name: e.target.value };
                    });
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {modal && (
        <ModalConfirm
          setModal={setModal}
          handle={handleTambahStasiun}
          title="Simpan Data Stasiun"
          desc="Anda akan menyimpan data stasiun baru. Apakah Anda yakin ingin melanjutkan?"
          bg="bg-[#0080FF]"
          cancel="Batal"
          confirm="Simpan"
        />
      )}
    </div>
  );
};

export default TambahStasiun;

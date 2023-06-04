import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import assets from "../../../assets/assets";

// ** Import Components
import Policy from "../../daftar-hotel/tambah-hotel/kebijakan-kamar/Policy";
import { deleteStasiun, editStasiun } from "../../../redux/daftar-stasiun/daftarStasiunSlices";
import ModalConfirm from "../ModalConfirm.jsx";

const ModalDetailStasiun = ({ data, setModalDetail }) => {
  const dispatch = useDispatch();

  const [input, setInput] = useState(data);

  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalBack, setModalBack] = useState(false);

  const [clicked, setClicked] = useState({ stasiun_aktif: data.is_active });
  const description = { aktif: "Stasiun Masih Aktif", nonAktif: "Stasiun Tidak Aktif" };

  // validate between two object is equal
  const validateEdit = JSON.stringify(data) === JSON.stringify(input);

  useEffect(() => {
    setInput((prev) => {
      return { ...prev, is_active: clicked.stasiun_aktif };
    });
  }, [clicked]);

  // DELETE DATA
  const handleDelete = () => {
    dispatch(deleteStasiun({ id: data.id }));
    setModalDelete(false);
    setModalDetail(false);
  };

  // EDIT DATA
  const handleEdit = () => {
    dispatch(editStasiun(input));
    setModalEdit(false);
    setModalDetail(false);
  };

  return (
    <div className="fixed z-50 duration-500 top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-gray-700/50">
      <div className="bg-white w-3/4 h-5/6 rounded-xl p-8">
        <div className="flex justify-between mb-14">
          <button onClick={() => setModalBack(true)} className="flex items-center gap-2 ml-2">
            <img src={assets.iconKembaliDaftarKa} alt="back" />

            <h5 className="text-[#0080FF] text-[16px] mt-[1px] cursor-pointer">Kembali</h5>
          </button>

          <div className="flex gap-4">
            <button className="text-[18px] font-[500] text-[#FFFFFF] py-[10px] px-6 border border-[#D2D7E0] rounded-lg bg-[#DB2D24] flex items-center gap-2" onClick={() => setModalDelete(true)}>
              <h1 className="font-[500]">Hapus Stasiun</h1>
              <img src={assets.iconDelete} alt="" />
            </button>
            <button
              disabled={validateEdit}
              onClick={() => setModalEdit(true)}
              className="px-8 py-[13.5px] font-bold text-white disabled:bg-[#B3D9FF] bg-[#0080FF] flex gap-3 items-center rounded-lg disabled:cursor-not-allowed"
            >
              <h1 className="mt-[1.2px]">Simpan Perubahan</h1>
              <img src={assets.iconSaveHotel} alt="button" />
            </button>
          </div>
        </div>

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
                value={input.code}
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
                value={input.station_name}
                onChange={(e) => {
                  setInput((prev) => {
                    return { ...prev, station_name: e.target.value };
                  });
                }}
              />
            </div>
          </div>
        </div>

        {modalDelete && (
          <ModalConfirm
            setModal={setModalDelete}
            handle={handleDelete}
            title={"Menghapus Data Stasiun"}
            desc={"Anda akan menghapus data stasiun ini. Apakah Anda yakin ingin melanjutkan? Tindakan ini tidak dapat diurungkan."}
            bg={"bg-[#DB2D24]"}
            cancel={"Batal"}
            confirm={"Hapus"}
          />
        )}

        {modalEdit && (
          <ModalConfirm
            setModal={setModalEdit}
            handle={handleEdit}
            title={"Ubah Data Stasiun"}
            desc={"Anda akan mengubah data stasiun ini. Apakah Anda yakin ingin melanjutkan?"}
            bg={"bg-[#0080FF]"}
            cancel={"Batal"}
            confirm={"Ubah"}
          />
        )}

        {modalBack && (
          <ModalConfirm
            setModal={setModalBack}
            handle={() => setModalDetail(false)}
            title={"Batal Mengubah Data Stasiun"}
            desc={"Anda akan membatalkan perubahan data stasiun. Apakah Anda yakin ingin melanjutkan?"}
            bg={"bg-[#DB2D24]"}
            cancel={"Tutup"}
            confirm={"Batalkan"}
          />
        )}
      </div>
    </div>
  );
};

export default ModalDetailStasiun;
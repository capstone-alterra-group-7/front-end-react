// ** Import React
import { useState } from "react";

// ** Import Assets
import assets from "../../../assets/assets";

// ** Import Components
import ModalConfirm from "../../../globals/ModalConfirm";

// ** Import Other
import { baseUrl } from "../../../services/base";
import { customAlert } from "../../../helpers/customAlert";
import { fetcherDelete, fetcherPut } from "../../../services/fetcher/fetcher";

const ModalDetailStasiun = (props) => {
  const { data, setModalDetail, mutate } = props;

  const [input, setInput] = useState(data);

  const [modalDelete, setModalDelete] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [modalBack, setModalBack] = useState(false);
  const [loading, setLoading] = useState(false);

  // validate between two object is equal
  const validateEdit = JSON.stringify(data) === JSON.stringify(input);

  // DELETE DATA
  const handleDelete = () => {
    setLoading(true);

    fetcherDelete(baseUrl(`/admin/station/${input.station_id}`))
      .then((res) => {
        mutate("/public/station");

        customAlert(
          "https://gcdnb.pbrd.co/images/UsggKXgrW4ny.png?o=1",
          "Data Dihapus",
          `Data stasiun ${input.name} telah berhasil dihapus dari sistem.`
        );

        setLoading(false);

        setModalDelete(false);

        setModalDetail(false);
      })
      .catch((err) => console.log(err));
  };

  // EDIT DATA
  const handleEdit = () => {
    setLoading(true);

    fetcherPut(baseUrl(`/admin/station/${input.station_id}`), {
      initial: input.initial,
      name: input.name,
      origin: input.origin,
    })
      .then((res) => {
        const {
          data: { name },
        } = res;

        mutate("/public/station");

        customAlert(
          "https://gcdnb.pbrd.co/images/k8Jd9tS7Ufog.png?o=1",
          "Perubahan Tersimpan",
          `Perubahan pada data stasiun ${name} telah berhasil disimpan.`
        );

        setLoading(false);

        setModalEdit(false);

        setModalDetail(false);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="fixed z-50 duration-500 top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-gray-700/50">
      <div className="bg-white w-3/4 h-5/6 rounded-xl p-8">
        <div className="flex justify-between mb-14">
          <button
            onClick={() => setModalBack(true)}
            className="flex items-center gap-2 ml-2"
          >
            <img src={assets.iconKembaliDaftarKa} alt="back" />

            <h5 className="text-[#0080FF] text-[16px] mt-[1px] cursor-pointer">
              Kembali
            </h5>
          </button>

          <div className="flex gap-4">
            <button
              className="text-[18px] font-[500] text-[#FFFFFF] py-[10px] px-6 border border-[#D2D7E0] rounded-lg bg-[#DB2D24] flex items-center gap-2"
              onClick={() => setModalDelete(true)}
            >
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

        <div className="mb-5 w-full">
          <label htmlFor="kodeStasiun" className="text-sm font-bold">
            Nama Stasiun
          </label>
          <div className={`flex mt-2 h-11  rounded-lg border border-[#D2D7E0]`}>
            <input
              type="text"
              className="px-3 py-[0.625rem] w-full rounded-lg disabled:cursor-not-allowed"
              placeholder="Masukan Kode Stasiun"
              value={input.name}
              onChange={(e) => {
                setInput((prev) => {
                  return { ...prev, name: e.target.value };
                });
              }}
            />
          </div>
        </div>

        <div className="mt-8 flex gap-6">
          <div className="mb-12 w-1/3">
            <label htmlFor="kodeStasiun" className="text-sm font-bold">
              Kode Stasiun
            </label>
            <div
              className={`flex mt-2 h-11  rounded-lg border border-[#D2D7E0]`}
            >
              <input
                type="text"
                className="px-3 py-[0.625rem] w-full rounded-lg disabled:cursor-not-allowed"
                placeholder="Masukan Kode Stasiun"
                value={input.initial}
                onChange={(e) => {
                  setInput((prev) => {
                    return { ...prev, initial: e.target.value };
                  });
                }}
              />
            </div>
          </div>

          <div className="mb-12 w-2/3">
            <label htmlFor="kodeStasiun" className="text-sm font-bold">
              Domisili
            </label>
            <div
              className={`flex mt-2 h-11  rounded-lg border border-[#D2D7E0]`}
            >
              <input
                type="text"
                className="px-3 py-[0.625rem] w-full rounded-lg disabled:cursor-not-allowed"
                placeholder="Masukan Nama Stasiun"
                value={input.origin}
                onChange={(e) => {
                  setInput((prev) => {
                    return { ...prev, origin: e.target.value };
                  });
                }}
              />
            </div>
          </div>
        </div>

        {modalDelete && (
          <ModalConfirm
            loading={loading}
            setModal={setModalDelete}
            handle={handleDelete}
            title={"Menghapus Data Stasiun"}
            desc={
              "Anda akan menghapus data stasiun ini. Apakah Anda yakin ingin melanjutkan? Tindakan ini tidak dapat diurungkan."
            }
            bg={"bg-[#DB2D24]"}
            cancel={"Batal"}
            confirm={"Hapus"}
          />
        )}

        {modalEdit && (
          <ModalConfirm
            setModal={setModalEdit}
            loading={loading}
            handle={handleEdit}
            title={"Ubah Data Stasiun"}
            desc={
              "Anda akan mengubah data stasiun ini. Apakah Anda yakin ingin melanjutkan?"
            }
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
            desc={
              "Anda akan membatalkan perubahan data stasiun. Apakah Anda yakin ingin melanjutkan?"
            }
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

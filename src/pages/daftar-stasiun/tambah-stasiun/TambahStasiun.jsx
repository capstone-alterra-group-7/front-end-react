// ** Import React
import { useState } from "react";

// ** Import Components
import HeaderTambahStasiun from "../../../components/daftar-stasiun/tambah-stasiun/HeaderTambahStasiun";
import ModalConfirm from "../../../globals/ModalConfirm";

// ** Import Other
import { baseUrl } from "../../../services/base";
import { useNavigate } from "react-router-dom";
import { customAlert } from "../../../helpers/customAlert";
import { fetcherPost } from "../../../services/fetcher/fetcher";
import Swal from "sweetalert2";

const TambahStasiun = () => {
  const navigate = useNavigate();

  // ** Local State
  const [input, setInput] = useState({
    initial: "",
    name: "",
    region: "",
  });
  const [loading, setLoading] = useState(false);

  const handleTambahStasiun = () => {
    setLoading(true);

    fetcherPost(baseUrl("/admin/station"), {
      name: input.name,
      initial: input.initial,
      origin: input.region,
    })
      .then((res) => {
        const {
          data: { name },
        } = res;

        customAlert(
          "https://gcdnb.pbrd.co/images/2R7PmnlXkvSE.png?o=1",
          "Data Ditambahkan",
          `Data stasiun ${name} berhasil ditambahkan ke dalam sistem.`
        );

        setLoading(false);

        navigate("/daftar-stasiun");
      })
      .catch((err) => {
        const {
          response: { data },
        } = err;

        setLoading(false);

        setModal(false);

        Swal.fire(`Nama Stasiun Sudah Digunakan`, `${data.message}`, "error");

        console.log(err);
      });
  };

  const validate =
    input.initial === "" || input.name === "" || input.region === "";

  const [modal, setModal] = useState(false);

  return (
    <div className="bg-[#FFFFFF] absolute  left-0 right-0 h-full ">
      <HeaderTambahStasiun setModal={setModal} validate={validate} />

      <div className="bg-[#EBEDF1] px-36 py-12 h-full  overflow-y-hidden">
        <div className="p-8 bg-white  shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-[2rem] mb-7 h-[32rem]">
          <div className="mb-12 w-full">
            <label htmlFor="kodeStasiun" className="text-sm font-bold">
              Nama Stasiun
            </label>

            <div
              className={`flex mt-2 h-11  rounded-lg border border-[#D2D7E0]`}
            >
              <input
                type="text"
                className="px-3 py-[0.625rem] w-full rounded-lg focus:outline-none"
                placeholder="Masukan Nama Stasiun"
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
                  className="px-3 py-[0.625rem] w-full rounded-lg focus:outline-none"
                  placeholder="Masukan Kode Stasiun"
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
                  className="px-3 py-[0.625rem] w-full rounded-lg focus:outline-none"
                  placeholder="Masukan Region Stasiun"
                  onChange={(e) => {
                    setInput((prev) => {
                      return { ...prev, region: e.target.value };
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
          loading={loading}
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

// ** Import React
import React, { useEffect, useState } from "react";

// ** Import Components
import HeaderTambahStasiun from "../../../components/daftar-stasiun/tambah-stasiun/HeaderTambahStasiun";
import Policy from "../../../components/daftar-hotel/tambah-hotel/kebijakan-kamar/Policy";
import ModalConfirm from "../../../components/daftar-stasiun/ModalConfirm";

// ** Import Other
import axios from "axios";
import { baseUrl } from "../../../services/base";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const fetcher = (url, payload) =>
  axios.post(url, payload).then((res) => res.data);

const TambahStasiun = () => {
  const navigate = useNavigate();

  // ** Local State
  const [clicked, setClicked] = useState({ stasiun_aktif: false });
  const description = {
    aktif: "Stasiun Masih Aktif",
    nonAktif: "Stasiun Tidak Aktif",
  };
  const [input, setInput] = useState({
    is_active: clicked.stasiun_aktif,
    initial: "",
    name: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setInput((prev) => {
      return { ...prev, is_active: clicked.stasiun_aktif };
    });
  }, [clicked]);

  const handleTambahStasiun = () => {
    setLoading(true);

    fetcher(baseUrl("/admin/station"), {
      name: input.name,
      initial: input.initial,
      origin: "xxx",
    })
      .then(() => {
        Swal.fire("Success", "Stasiun Telah Ditambahkan", "success");

        setLoading(false);

        navigate("/daftar-stasiun");
      })
      .catch((err) => console.log(err));
  };

  const validate = input.code === "" || input.station_name === "";
  const validateBtnBack = input.code === "" && input.station_name === "";

  const [modal, setModal] = useState(false);

  return (
    <div className="bg-[#FFFFFF] absolute  left-0 right-0 h-full overflow-y-hidden">
      <HeaderTambahStasiun
        setModal={setModal}
        validate={validate}
        validateBtnBack={validateBtnBack}
      />

      <div className="bg-[#EBEDF1] px-36 py-12 h-full overflow-y-hidden">
        <div className="p-8 bg-white rounded-[2rem] mb-7 h-[20rem]">
          <Policy
            clicked={clicked}
            setClicked={setClicked}
            title={"Keaktifan Stasiun"}
            name={"stasiun_aktif"}
            desc={
              clicked.stasiun_aktif ? description.aktif : description.nonAktif
            }
          />

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
                  className="px-3 py-[0.625rem] w-full rounded-lg"
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
                Nama Stasiun
              </label>
              <div
                className={`flex mt-2 h-11  rounded-lg border border-[#D2D7E0]`}
              >
                <input
                  type="text"
                  className="px-3 py-[0.625rem] w-full rounded-lg"
                  placeholder="Masukan Nama Stasiun"
                  onChange={(e) => {
                    setInput((prev) => {
                      return { ...prev, name: e.target.value };
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

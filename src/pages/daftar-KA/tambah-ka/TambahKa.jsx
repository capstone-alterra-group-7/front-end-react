// ** Import React
import { useState } from "react";

// ** Import Components
import HeaderTambahKa from "../../../components/daftar-ka/tambah-ka/HeaderTambahKa";
import ModalDaftarKa from "../../../components/daftar-ka/ModalDaftarKa";
import NavDetailka from "../../../components/daftar-ka/NavDetailka";
import FormTambahKa from "../../../components/daftar-ka/tambah-ka/FormTambahKa";
import GerbongDaftarKa from "../../../components/daftar-ka/tambah-ka/GerbongDaftarKa";
import ModalConfirm from "../../../components/daftar-stasiun/ModalConfirm";

// ** Import Redux
import { useDispatch } from "react-redux";
import { addIdKa } from "../../../redux/daftar-ka/daftarKaSlices";

// ** Import Other
import { useLocation, useNavigate } from "react-router-dom";
import { idGenerator } from "generate-custom-id";
import { baseUrl } from "../../../services/base";
import axios from "axios";
import useSWR from "swr";
import { customAlert } from "../../../helpers/customAlert";

const fetcherTambahKa = (url, payload) =>
  axios.post(url, payload).then((res) => res.data);

const fetcherEditKa = (url, payload) =>
  axios.put(url, payload).then((res) => res.data);

const fetcherGerbongKa = (url) => axios.get(url).then((res) => res.data);

const TambahKa = () => {
  const { state } = useLocation();

  const dataEdit = {
    train_id: state?.train_id,
    code_train: state?.code_train,
    name: state?.name,
    route: state?.route.map((data) => ({
      station_id: data?.station_id,
      name: data?.station?.name,
      arrive_time: data?.arrive_time,
    })),
    status: state?.status,
  };

  const { data: gerbongKa, isLoading } = useSWR(
    baseUrl("/public/train-carriage?limit=9999"),
    fetcherGerbongKa
  );

  const findGerbong = isLoading
    ? null
    : gerbongKa?.data?.filter(
        (gerbong) => gerbong.train.train_id === dataEdit.train_id
      );

  const dataEditGerbong = findGerbong?.map((gerbong) => ({
    class: gerbong.train.class,
    name: gerbong.name,
    price: gerbong.train.price,
    train_id: gerbong.train.train_id,
  }));

  // ** Local State
  const [input, setInput] = useState({
    status: state ? dataEdit.status : "unavailable",
    name: state ? dataEdit.name : "",
    rute: state ? dataEdit.route : [],
  });

  const [dataGerbong, setDataGerbong] = useState([]);
  const [loading, setLoading] = useState(false);
  const [nav, setNav] = useState("informasi");
  const [modal, setModal] = useState(false);
  const [modalGerbong, setModalGerbong] = useState(false);

  const handleOnChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const findNoneJadwal = input.rute.filter((r) => r.arrive_time === "");

  const validate =
    input.name === "" ||
    input.rute.length === 0 ||
    findNoneJadwal.length >= 1 ||
    input.rute.length <= 1;

  const findNoneNameGerbong = dataGerbong.filter((g) => g.name === "");

  const validateGerbong =
    dataGerbong?.length === 0 || findNoneNameGerbong.length >= 1;

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const code_train = idGenerator("example", 2, 1, {
    prefix: "TRAIN",
    trace: true,
  });

  const handleTambahInformasiKa = () => {
    setLoading(true);

    fetcherTambahKa(baseUrl("/admin/train"), {
      code_train: code_train,
      name: input.name,
      route: input.rute.map((r) => ({
        station_id: r.station_id,
        arrive_time: r.arrive_time,
      })),
      status: input.status,
    })
      .then((res) => {
        const {
          data: { train_id },
        } = res;

        dispatch(addIdKa(train_id));

        setNav("gerbong");

        setModal(false);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleEditInformasiKa = () => {
    setLoading(true);

    fetcherEditKa(baseUrl(`/admin/train/${dataEdit.train_id}`), {
      code_train: dataEdit.code_train,
      name: input.name,
      route: input.rute.map((r) => ({
        station_id: r.station_id,
        arrive_time: r.arrive_time,
      })),
      status: input.status,
    })
      .then((res) => {
        const {
          data: { name },
        } = res;

        navigate("/daftar-ka");

        customAlert(
          "https://gcdnb.pbrd.co/images/k8Jd9tS7Ufog.png?o=1",
          "Perubahan Tersimpan",
          `Perubahan pada data kereta api ${name} telah berhasil disimpan.`
        );

        setNav("gerbong");

        setModal(false);

        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleTambahGerbong = () => {
    setLoading(true);

    fetcherTambahKa(baseUrl("/admin/train-carriage"), dataGerbong)
      .then(() => {
        setModal(false);

        customAlert(
          "https://gcdnb.pbrd.co/images/2R7PmnlXkvSE.png?o=1",
          "Data Ditambahkan",
          `Data kereta api ${input.name} telah berhasil ditambahkan ke dalam sistem.`
        );

        setLoading(false);

        navigate("/daftar-ka");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  return (
    <div className="absolute left-0 right-0 bg-[#F5F6F8] pb-20">
      <HeaderTambahKa
        validate={
          state === null
            ? nav === "informasi"
              ? validate
              : validateGerbong
            : validate
        }
        setModal={setModal}
        setModalGerbong={setModalGerbong}
        nav={nav}
        isEdit={state}
      />

      {nav === "informasi" ? (
        <div
          className={
            "w-[1142px] min-h-full mt-[64px] mx-auto bg-white rounded-3xl border-2"
          }
        >
          <NavDetailka nav={nav} setNav={setNav} isEdit={state} />

          <FormTambahKa
            input={input}
            edit={state}
            dataEdit={dataEdit}
            setInput={setInput}
            handleOnChangeInput={handleOnChangeInput}
          />
        </div>
      ) : (
        <div
          className={
            "w-[1142px] min-h-full mt-[64px] mx-auto  rounded-3xl shadow-"
          }
        >
          <GerbongDaftarKa
            loading={isLoading}
            nav={nav}
            setNav={setNav}
            edit={state}
            dataEdit={state === null ? null : findGerbong}
            datas={state === null ? dataGerbong : dataEditGerbong}
            setDatas={setDataGerbong}
          />
        </div>
      )}

      {state === null
        ? modal && (
            <ModalConfirm
              setModal={setModal}
              handle={
                state === null ? handleTambahInformasiKa : handleEditInformasiKa
              }
              loading={loading}
              title="Lanjutkan Mengisi Data Gerbong?"
              desc="Anda akan menyimpan data saat ini untuk melanjutkan mengisi data gerbong. Apakah Anda yakin ingin melanjutkan?"
              bg="bg-[#0080FF]"
              cancel="Batal"
              confirm="Simpan Perubahan"
            />
          )
        : modal && (
            <ModalConfirm
              setModal={setModal}
              handle={handleEditInformasiKa}
              loading={loading}
              title="Simpan Perubahan Data Kereta Api"
              desc="Anda akan menyimpan perubahan pada data kereta api. Apakah Anda yakin ingin melanjutkan?"
              bg="bg-[#0080FF]"
              cancel="Batal"
              confirm="Simpan Perubahan"
            />
          )}

      {modalGerbong && (
        <ModalConfirm
          setModal={setModalGerbong}
          handle={handleTambahGerbong}
          loading={loading}
          title={"Simpan Data Kereta Api"}
          desc={
            "Anda akan menyimpan data kereta api baru. Apakah Anda yakin ingin melanjutkan?"
          }
          bg={"bg-[#0080FF]"}
          cancel={"Batal"}
          confirm={"Simpan"}
        />
      )}
    </div>
  );
};

export default TambahKa;

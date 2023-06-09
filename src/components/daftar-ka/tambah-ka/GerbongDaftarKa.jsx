// ** Import React
import { useEffect, useState } from "react";

// ** Import Assets
import assets from "../../../assets/assets";

// ** Import Redux
import { useSelector } from "react-redux";

// ** Import Components
import InputGerbong from "./InputGerbong";
import KelasEkonomi from "./KelasEkonomi";
import KelasBisnis from "./KelasBisnis";
import KelasEksekutif from "./KelasEksekutif";
import NavDetailka from "../NavDetailka";

const GerbongDaftarKa = (props) => {
  const { datas, setDatas, edit, dataEdit, loading, nav, setNav } = props;

  const manimpulateDataEdit = dataEdit?.map((gerbong) => ({
    class: gerbong.train.class,
    price: gerbong.train.price,
  }));

  const findEkonomi = manimpulateDataEdit?.find(
    (gerbong) => gerbong.class === "Ekonomi"
  );

  const findBisnis = manimpulateDataEdit?.find(
    (gerbong) => gerbong.class === "Bisnis"
  );

  const findEksekutif = manimpulateDataEdit?.find(
    (gerbong) => gerbong.class === "Eksekutif"
  );

  // ** Redux State
  const trainId = useSelector((state) => state.daftarKa.train_id);

  // ** Local State
  const [price, setPrice] = useState({
    ekonomi: edit ? findEkonomi?.price : "",
    bisnis: edit ? findBisnis?.price : "",
    eksekutif: edit ? findEksekutif?.price : "",
  });
  const [activeGerbong, setActiveGerbong] = useState(99999);

  const handleEkonomi = (e) => {
    setPrice({ ...price, ekonomi: e.target.value });
  };

  const handleBisnis = (e) => {
    setPrice({ ...price, bisnis: e.target.value });
  };

  const handleEksekutif = (e) => {
    setPrice({ ...price, eksekutif: e.target.value });
  };

  const validate =
    price.ekonomi === "" || price.bisnis === "" || price.eksekutif === "";

  return (
    <div className={`${loading ? "h-screen" : "h-full"}`}>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="border-2 rounded-3xl">
          <NavDetailka nav={nav} setNav={setNav} isEdit={edit} />
          <div className="space-y-7 px-10 bg-white pb-12 rounded-b-3xl">
            <InputGerbong
              title="Harga"
              value={
                manimpulateDataEdit === undefined
                  ? price.ekonomi
                  : findEkonomi?.price
              }
              onChange={handleEkonomi}
              disable={edit}
            />

            <InputGerbong
              title="Tiket Bisnis"
              value={
                manimpulateDataEdit === undefined
                  ? price.bisnis
                  : findBisnis?.price
              }
              onChange={handleBisnis}
              disable={edit}
            />

            <InputGerbong
              title="Tiket Eksekutif"
              value={
                loading
                  ? 0
                  : manimpulateDataEdit === undefined
                  ? price.eksekutif
                  : findEksekutif?.price
              }
              onChange={handleEksekutif}
              disable={edit}
            />
          </div>
        </div>
      )}

      {validate ? null : (
        <>
          <div key={"firts"} className="space-y-9 mt-8">
            {loading ? (
              <p className="text-center">Loading...</p>
            ) : (
              datas?.map((data, index) => (
                <>
                  <div
                    key={index}
                    className="bg-white border-2 p-8 rounded-3xl"
                  >
                    <div className="flex  items-center justify-between mb-8">
                      <h1 className="text-[20px] font-[600] text-[#262627]">
                        Gerbong {index + 1}
                      </h1>

                      {!edit && (
                        <button
                          className="py-3 px-4 rounded-lg bg-red-600 text-white"
                          onClick={() =>
                            setDatas(datas.filter((d, i) => i !== index))
                          }
                        >
                          <svg
                            width="14"
                            height="16"
                            viewBox="0 0 14 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M4.83325 11.75L6.99992 9.58333L9.16658 11.75L10.3333 10.5833L8.16659 8.41667L10.3333 6.25L9.16658 5.08333L6.99992 7.25L4.83325 5.08333L3.66659 6.25L5.83325 8.41667L3.66659 10.5833L4.83325 11.75ZM2.83325 15.5C2.37492 15.5 1.98256 15.3368 1.65617 15.0104C1.32978 14.684 1.16659 14.2917 1.16659 13.8333V3H0.333252V1.33333H4.49992V0.5H9.49992V1.33333H13.6666V3H12.8333V13.8333C12.8333 14.2917 12.6701 14.684 12.3437 15.0104C12.0173 15.3368 11.6249 15.5 11.1666 15.5H2.83325ZM11.1666 3H2.83325V13.8333H11.1666V3Z"
                              fill="white"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    <div key={index} className="space-y-10">
                      <div className="flex items-center gap-9">
                        <div className="space-y-3">
                          <h5 className="text-[14px] text-[#262627] font-semibold">
                            Tipe Gerbong
                          </h5>

                          <div className="relative w-96">
                            <select
                              name="class"
                              disabled={edit}
                              value={data.class}
                              onChange={(e) =>
                                setDatas(
                                  datas.map((data, i) => {
                                    if (index === i) {
                                      return {
                                        ...data,
                                        ["class"]: e.target.value,
                                        price:
                                          (e.target.value === "Ekonomi" &&
                                            Number(price.ekonomi)) ||
                                          (e.target.value === "Bisnis" &&
                                            Number(price.bisnis)) ||
                                          (e.target.value === "Eksekutif" &&
                                            Number(price.eksekutif)),
                                      };
                                    } else {
                                      return data;
                                    }
                                  })
                                )
                              }
                              className="p-3 w-[24rem] bg-[#F9FAFB] border border-[#D2D7E0] rounded-lg appearance-none focus:outline-none disabled:cursor-not-allowed"
                            >
                              <option value="Ekonomi">Ekonomi</option>
                              <option value="Bisnis">Bisnis</option>
                              <option value="Eksekutif">Eksekutif</option>
                            </select>

                            <img
                              src={assets.iconDropdownDaftarKa}
                              alt="dropdown"
                              className="absolute right-6 top-[24px]"
                            />
                          </div>
                        </div>

                        <div className="space-y-3 flex-1">
                          <h5 className="text-[14px] text-[#262627] font-semibold">
                            Nama Gerbong
                          </h5>

                          <input
                            placeholder="Eko-1"
                            disabled={edit}
                            name="name"
                            value={data.name}
                            onChange={(e) =>
                              setDatas(
                                datas.map((data, i) => {
                                  if (index === i) {
                                    return {
                                      ...data,
                                      ["name"]: e.target.value,
                                    };
                                  } else {
                                    return data;
                                  }
                                })
                              )
                            }
                            type="text"
                            className="p-3 focus:outline-none bg-[#F9FAFB] border border-[#D2D7E0] w-full rounded-lg disabled:cursor-not-allowed"
                          />
                        </div>
                      </div>

                      <div className="flex justify-center items-center mx-auto gap-2">
                        <h5
                          className="text-center cursor-pointer text-[#0080FF] text-[16px] font-[600]"
                          onClick={() =>
                            setActiveGerbong(
                              activeGerbong === index ? 9999 : index
                            )
                          }
                        >
                          {activeGerbong === index
                            ? "Tutup Tampilan Gerbong"
                            : "Lihat Tampilan Gerbong"}
                        </h5>

                        <svg
                          width="9"
                          height="5"
                          viewBox="0 0 9 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M0.333496 0.333252L4.50016 4.49992L8.66683 0.333252H0.333496Z"
                            fill="#0080FF"
                          />
                        </svg>
                      </div>
                    </div>
                    {activeGerbong === index ? (
                      <>
                        {data.class === "Ekonomi" && <KelasEkonomi />}
                        {data.class === "Bisnis" && <KelasBisnis />}
                        {data.class === "Eksekutif" && <KelasEksekutif />}
                      </>
                    ) : null}
                  </div>
                </>
              ))
            )}

            {!edit && (
              <div className="flex flex-col text-center rounded-3xl bg-white border-2">
                <img
                  src="https://gcdnb.pbrd.co/images/BLvscztLcrvt.png?o=1"
                  alt="gerbong"
                  className="mx-auto"
                  width={400}
                />

                <div className="w-96 mx-auto space-y-3 pb-14">
                  <h1 className="text-[#262627] font-[600] text-[24px]">
                    Tambahkan Gerbong Baru
                  </h1>

                  <p className="text-[#717275] text-[14px] font-[400]">
                    Anda dapat menambahkan data gerbong baru dengan tekan button
                    dibawah ini
                  </p>

                  <button
                    onClick={() =>
                      setDatas([
                        ...datas,
                        {
                          class: "Ekonomi",
                          name: "",
                          price: Number(price.ekonomi),
                          train_id: trainId,
                        },
                      ])
                    }
                    className="px-8 py-3 bg-[#0080FF] w-full rounded-lg text-white"
                  >
                    Tambah Gerbong
                  </button>
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {validate && <div className="mb-8"></div>}
    </div>
  );
};

export default GerbongDaftarKa;

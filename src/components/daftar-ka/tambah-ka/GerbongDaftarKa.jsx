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

const GerbongDaftarKa = (props) => {
  const { datas, setDatas, edit, dataEdit, loading } = props;

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
    <div className={`py-4 ${loading ? "h-screen" : "h-full"}`}>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="space-y-7 px-10">
          <InputGerbong
            title="Ekonomi"
            value={
              manimpulateDataEdit === undefined
                ? price.ekonomi
                : findEkonomi?.price
            }
            onChange={handleEkonomi}
            disable={edit}
          />

          <InputGerbong
            title="Bisnis"
            value={
              manimpulateDataEdit === undefined
                ? price.bisnis
                : findBisnis?.price
            }
            onChange={handleBisnis}
            disable={edit}
          />

          <InputGerbong
            title="Eksekutif"
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
      )}

      {validate ? null : (
        <>
          <div className="bg-[#F5F6F8] p-1 w-full mt-12"></div>

          <div key={"firts"} className="space-y-20 mt-3 px-10 py-8">
            {!edit && (
              <div className="flex justify-end">
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
                  className="px-8 py-3 bg-[#0080FF] rounded-lg text-white"
                >
                  + Tambah Gerbong
                </button>
              </div>
            )}

            {loading ? (
              <p className="text-center">Loading...</p>
            ) : (
              datas?.map((data, index) => (
                <>
                  <div key={index} className="bg-gray-100 p-8 rounded-3xl">
                    <div className="flex  items-center justify-between  mb-14">
                      <button
                        className="py-[7px] px-6 bg-[#0080FF] text-white cursor-pointer rounded-lg"
                        onClick={() =>
                          setActiveGerbong(
                            activeGerbong === index ? 9999 : index
                          )
                        }
                      >
                        {activeGerbong === index
                          ? "Tutup"
                          : "Buka Tampilan Gerbong"}
                      </button>

                      {!edit && (
                        <button
                          className="py-[7px] px-6 rounded-lg bg-red-600 text-white"
                          onClick={() =>
                            setDatas(datas.filter((d, i) => i !== index))
                          }
                        >
                          Hapus
                        </button>
                      )}
                    </div>

                    <div key={index} className="flex items-center gap-9">
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
                                  return { ...data, ["name"]: e.target.value };
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
          </div>
        </>
      )}

      {validate && <div className="mb-8"></div>}
    </div>
  );
};

export default GerbongDaftarKa;

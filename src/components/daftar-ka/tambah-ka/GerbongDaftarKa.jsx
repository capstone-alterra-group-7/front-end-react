// ** Import React
import { useState } from "react";

// ** Import Assets
import assets from "../../../assets/assets";

// ** Import Components
import InputGerbong from "./InputGerbong";
import KelasEkonomi from "./KelasEkonomi";
import KelasBisnis from "./KelasBisnis";
import KelasEksekutif from "./KelasEksekutif";

const GerbongDaftarKa = (props) => {
  const { input, setInput, handleOnChangeInput } = props;

  // ** Local State
  const [datasGerbong, setDatasGerbong] = useState([]);
  const [classGerbong, setClassGerbong] = useState({
    ekonomi: "",
    bisnis: "",
    eksekutif: "",
  });

  return (
    <div className=" py-4 h-full">
      <div className="space-y-7 px-10">
        <InputGerbong
          title="Ekonomi"
          kursi={
            input.class === "Ekonomi"
              ? classGerbong.ekonomi.length === 0
                ? "-"
                : classGerbong.ekonomi
              : "-"
          }
        />

        <InputGerbong title="Bisnis" kursi="-" />

        <InputGerbong title="Eksekutif" kursi="-" />
      </div>

      <div className="bg-[#F5F6F8] p-1 w-full mt-12"></div>

      <div className="space-y-20 mt-3 px-10 py-16">
        <div className="flex justify-between">
          <button className="bg-[#FCFDFF] text-gray-300 border border-gray-200 py-[10px] px-5 flex items-center gap-2 rounded-lg">
            <img
              src={assets.iconLeftDetailKursi}
              alt="left"
              className="-mt-[3px]"
            />
            Sebelumnya
          </button>

          <h5 className="text-[20px] font-[600] text-[#262627]">
            {input.name.length === 0 ? "-" : input.name}
          </h5>

          <button className="bg-[#F9FAFB] text-[#4B4C4E] border border-[#D2D7E0] py-[10px] px-5 flex items-center gap-2 rounded-lg">
            Sebelumnya
            <img
              src={assets.iconRigthDetailKursi}
              alt="left"
              className="-mt-[3px]"
            />
          </button>
        </div>

        <div className="flex items-center gap-9">
          <div className="space-y-3">
            <h5 className="text-[14px] text-[#262627] font-semibold">
              Tipe Gerbong
            </h5>

            <div className="relative w-96">
              <select
                name="class"
                value={input.class}
                onChange={handleOnChangeInput}
                className="p-3 w-[24rem] bg-[#F9FAFB] border border-[#D2D7E0] rounded-lg appearance-none focus:outline-none"
              >
                <option value="">Pilih Kelas</option>
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
              name="name"
              value={input.name}
              onChange={handleOnChangeInput}
              type="text"
              className="p-3 focus:outline-none bg-[#F9FAFB] border border-[#D2D7E0] w-full rounded-lg"
            />
          </div>
        </div>
      </div>

      {input.class === "Ekonomi" && <KelasEkonomi />}
      {input.class === "Bisnis" && <KelasBisnis />}
      {input.class === "Eksekutif" && <KelasEksekutif />}

      <div className="mb-16"></div>
    </div>
  );
};

export default GerbongDaftarKa;

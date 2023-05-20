// ** Import Components
import InputTambahKa from "./InputTambahKa";
import DropdownTambahKa from "./DropdownTambahKa";

// ** Import TW Elements
import { initTE, Input, Timepicker } from "tw-elements";
import { useEffect } from "react";

// ** Import Other
import Select from "react-select";

const FormTambahKa = (props) => {
  const { input, setInput, handleOnChangeInput } = props;

  useEffect(() => {
    initTE({ Input, Timepicker });
  }, []);

  const selector1 = document.querySelector("#waktu-berangkat");

  selector1?.addEventListener("input.te.timepicker", (e) => {
    setInput({ ...input, waktuBerangkat: e.target?.value });
  });

  const selector2 = document.querySelector("#waktu-tiba");

  selector2?.addEventListener("input.te.timepicker", (e) => {
    setInput({ ...input, waktuTiba: e.target?.value });
  });

  return (
    <div className="px-10 py-12 space-y-8 h-full">
      <div className="space-y-5">
        <div className="flex items-center gap-5">
          <h1 className="text-[20px] font-[600] text-[#262627]">Status KA</h1>
          <input
            onChange={(e) => setInput({ ...input, status: e.target.checked })}
            value={input.status}
            name="status"
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#0080FF] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-[#0080FF] checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-#0080FF checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] shadow-md"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault01"
          />
        </div>

        <p className="text-[16px] text-slate-900/50 font-[400]">
          {input.status ? "Ka Aktif" : "KA Tidak Aktif"}
        </p>
      </div>

      <div className="flex gap-6">
        <div className="w-[23rem]">
          <InputTambahKa
            value={input.noKa}
            onChange={handleOnChangeInput}
            label="Nomor Kereta Api"
            name="noKa"
            type="number"
            placeholder="cth: 123456"
          />
        </div>

        <div className="flex-1">
          <InputTambahKa
            value={input.namaKa}
            onChange={handleOnChangeInput}
            name="namaKa"
            label="Nama Kereta Api"
            type="text"
            placeholder="Masukkan Nama Kereta Api"
          />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <InputTambahKa
          value={input.harga}
          onChange={handleOnChangeInput}
          label="Harga Kereta Api"
          name="harga"
          type="number"
          placeholder="cth: 34.000"
        />

        <DropdownTambahKa
          label="Kelas Kereta Api"
          placeholder="Pilih Kelas"
          data={kelas}
          input={input}
          setInput={setInput}
          name="kelasKa"
        />
      </div>

      <div className="grid grid-cols-2 gap-6">
        <DropdownTambahKa
          label="Stasiun Asal"
          placeholder="Pilih Stasiun"
          data={stasiunAsal}
          input={input}
          setInput={setInput}
          name="stasiunAsal"
        />

        <div id="waktu-berangkat" className="flex flex-col space-y-2">
          <label className="text-[20px] font-[600] text-[#262627]">
            Waktu Tujuan
          </label>
          <div
            className="relative"
            data-te-with-icon="false"
            data-te-timepicker-init
            id="timepicker-just-input"
          >
            <input
              type="text"
              placeholder="09.00 AM"
              className="w-full border border-[#D2D7E0]  bg-[#F9FAFB] text-[20px]  px-3 py-[9.5px]  outline-none placeholder:text-[#717275]  transition-all duration-200 ease-linear  rounded-lg"
              data-te-toggle="timepicker-just-input border"
              id="form15"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <DropdownTambahKa
          label="Stasiun Tujuan"
          placeholder="Pilih Stasiun"
          data={stasiunTujuan}
          input={input}
          setInput={setInput}
          name="stasiunTujuan"
        />

        <div id="waktu-tiba" className="flex flex-col space-y-2">
          <label className="text-[20px] font-[600] text-[#262627]">
            Waktu Tiba
          </label>
          <div
            className="relative"
            data-te-with-icon="false"
            data-te-timepicker-init
            id="timepicker-just-input"
          >
            <input
              type="text"
              placeholder="10.00 AM"
              className="w-full border border-[#D2D7E0]  bg-[#F9FAFB] text-[20px]  px-3 py-[9.5px]  outline-none placeholder:text-[#717275]  transition-all duration-200 ease-linear  rounded-lg"
              data-te-toggle="timepicker-just-input border"
              id="form15"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col space-y-2">
        <label className="text-[20px] font-[600] text-[#262627]">
          Rute Perjalanan
        </label>

        <Select
          placeholder="Pilih Rute"
          onChange={(e) =>
            setInput({ ...input, rute: e.map((val) => val.value.split()) })
          }
          styles={{
            control: (baseStyles) => ({
              ...baseStyles,
              borderColor: "#D2D7E0",
              padding: "3px 4px 3px",
              fontSize: "20px",
              backgroundColor: "#F9FAFB",
              borderRadius: 8,
            }),
          }}
          options={stasiunTujuan}
          isMulti
        />
      </div>

      <div className="mb-12"></div>
    </div>
  );
};

export default FormTambahKa;

const stasiunAsal = [
  { value: "cikampek", label: "Cikampek" },
  { value: "karawang", label: "Karawang" },
  { value: "bekasi", label: "Bekasi" },
];

const stasiunTujuan = [
  { value: "Bekasi", label: "Bekasi" },
  { value: "Cikarang", label: "Cikarang" },
  { value: "Jakarta Kota", label: "Jakarta Kota" },
];

const kelas = [
  { value: "Ekonomi", label: "Ekonomi" },
  { value: "Business", label: "Business" },
];

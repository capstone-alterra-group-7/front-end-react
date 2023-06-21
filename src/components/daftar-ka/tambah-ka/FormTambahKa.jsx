// ** Import React
import { useState } from "react";

// ** Import Components
import InputTambahKa from "./InputTambahKa";
import ModalRuteTambahKa from "./ModalRuteTambahKa";

// ** Import Other
import assets from "../../../assets/assets";

const FormTambahKa = (props) => {
  const { input, setInput, handleOnChangeInput, edit, dataEdit } = props;

  // ** Local State
  const [rute, setRute] = useState(false);

  const validateRute = input.rute.length >= 1;

  return (
    <div
      className={`px-10 ${
        validateRute ? "pb-12 space-y-14 " : "pb-10 space-y-4"
      } h-full`}
    >
      <div className="space-y-6">
        <div className="space-y-4">
          <div className="flex items-center gap-5">
            <h1 className="text-[20px] font-[600] text-[#262627]">
              Keaktifan Kereta Api
            </h1>

            <input
              defaultChecked={edit && dataEdit.status === "available"}
              onChange={(e) =>
                setInput({
                  ...input,
                  status: e.target.checked ? "available" : "unavailable",
                })
              }
              value={input.status}
              name="status"
              className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#0080FF] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-[#0080FF] checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-#0080FF checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] shadow-md"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault01"
            />
          </div>

          <p className="text-[16px] text-slate-900/50 font-[400]">
            Kereta Api Masih{" "}
            {input.status === "available" ? "Aktif" : "Tidak Aktif"}
          </p>
        </div>

        <div className="flex-1">
          <InputTambahKa
            value={input.name}
            onChange={handleOnChangeInput}
            name="name"
            label="Nama Kereta Api"
            type="text"
            placeholder="Masukkan Nama Kereta Api"
          />
        </div>
      </div>

      <div className="flex flex-col space-y-6">
        {validateRute && (
          <div>
            <h1 className="text-[30px] font-[600] text-[#262627]">
              Rute Perjalanan
            </h1>

            <p className="text-sm text-slate-600">* Minimum 2 Rute</p>
          </div>
        )}

        <div className="space-y-6">
          <div className="space-y-3">
            {input?.rute.map((rute, i) => (
              <div
                key={i}
                className="bg-[#F9FAFB] py-2 px-3 rounded-lg border border-[#D2D7E0] flex justify-between"
              >
                <h5 className="text-[20px] font-[500] text-[#262627]">
                  {rute.name}
                </h5>

                <img
                  src={assets.iconHapusDaftarKa}
                  className="cursor-pointer"
                  onClick={() =>
                    setInput({
                      ...input,
                      rute: input.rute.filter((r) => r.name !== rute.name),
                    })
                  }
                  alt="hapus"
                />
              </div>
            ))}
          </div>

          <button
            onClick={() => setRute(true)}
            className="bg-[#0080FF] text-[20px] w-full py-2 rounded-lg text-white"
          >
            Tambah Rute
          </button>
        </div>
      </div>

      <div className=" space-y-6">
        {validateRute && (
          <h1 className="text-[30px] font-[600] text-[#262627]">
            Jadwal Perjalanan
          </h1>
        )}

        <div className="space-y-6">
          {input?.rute.map((data, index) => (
            <div
              key={data.name}
              className="border border-[#E1E4EA] rounded-2xl bg-white p-5 flex justify-between"
            >
              <div className="">
                <h5 className="text-[#262627] text-[14px] font-[600]">
                  Stasiun
                </h5>
                <h5 className="text-[#262627] text-[20px] font-[600]">
                  {data.name}
                </h5>
              </div>

              <div
                id="waktu-tiba"
                className="space-y-2 flex justify-center items-center gap-3"
              >
                <h5 className="text-[#262627] mt-2 text-[14px] font-[600]">
                  Jam Tiba
                </h5>

                <input
                  type="time"
                  name="arrive_time"
                  value={data.arrive_time}
                  placeholder="12.00am"
                  onChange={(e) =>
                    setInput({
                      ...input,
                      rute: input.rute.map((r, i) => {
                        if (index === i) {
                          return { ...r, [e.target.name]: e.target.value };
                        } else {
                          return r;
                        }
                      }),
                    })
                  }
                  className="px-4 py-2 bg-[#F9FAFB] border border-[#D2D7E0] w-[17rem] rounded-lg focus:outline-none"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {rute && (
        <ModalRuteTambahKa
          setRute={setRute}
          setInput={setInput}
          input={input}
        />
      )}
    </div>
  );
};

export default FormTambahKa;

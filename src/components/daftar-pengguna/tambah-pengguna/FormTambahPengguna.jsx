// ** Import React
import React, { useState } from "react";

// ** Import Components
import InputPengguna from "./InputPengguna";
import InputPassword from "../edit-pengguna/InputPassword";

const FormTambahPengguna = (props) => {
  const { onChangePengguna, input, setInput, edit, dataEdit } = props;
  const [error, setError] = useState("")

  const validate = () => {
    if (input.password.length <= 8) {
      setError("Password must be at least 8 characters")
    } else {
      setError("")
    }
  }

  return (
    <div className="grid gap-6 pb-[100px] text-[#262627] bg-white p-10">
      <div className="space-y-4">
        <div className="flex items-center gap-5">
          <h1 className="text-[20px] font-[600] text-[#262627]">
            Keaktifan Pengguna
          </h1>

          <input
            defaultChecked={edit && dataEdit.is_active === "true"}
            onChange={(e) =>
              setInput({
                ...input,
                is_active: e.target.checked ? true : false,
              })
            }
            value={input.is_active}
            name="status"
            className="mr-2 mt-[0.3rem] h-3.5 w-8 appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-[#0080FF] checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-[#0080FF] checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-#0080FF checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] shadow-md"
            type="checkbox"
            role="switch"
            id="flexSwitchCheckDefault01"
          />
        </div>

        <p className="text-[16px] text-slate-900/50 font-[400]">
          Pengguna {input.is_active === true ? "Aktif" : "Tidak Aktif"}
        </p>
      </div>

      <div 
        onClick={validate}
        className="informasi-akun">
        <h1 className="text-[20px] font-semibold pb-5">Informasi Akun</h1>

        <InputPengguna
          name={"email"}
          id={"email"}
          type={"email"}
          label={"Email"}
          onChange={onChangePengguna}
          value={input.email}
        />

        <InputPassword
          name={"password"}
          id={"password"}
          label={"Password"}
          onChange={onChangePengguna}
          value={input.password}
        /> <p className="mb-4 text-sm text-red-500">{error}</p>

        <InputPassword
          name={"confirm_password"}
          id={"confirm_password"}
          label={"Konfirmasi Password"}
          value={input.confirm_password}
          onChange={onChangePengguna}
        />
      </div>

      <div className="detail-pengguna">
        <h1 className="text-[20px] font-semibold pb-5">Detail Pengguna</h1>

        <InputPengguna
          name={"full_name"}
          id={"full_name"}
          type={"text"}
          label={"Nama Pengguna"}
          onChange={onChangePengguna}
          value={input.full_name}
        />

        <InputPengguna
          name={"birth_date"}
          id={"birth_date"}
          type={"date"}
          label={"Tanggal Lahir"}
          onChange={onChangePengguna}
          value={input.birth_date}
        />

        <InputPengguna
          name={"phone_number"}
          id={"phone_number"}
          type={"number"}
          label={"Nomor Handphone"}
          onChange={onChangePengguna}
          value={input.phone_number}
        />
      </div>
    </div>
  );
};

export default FormTambahPengguna;

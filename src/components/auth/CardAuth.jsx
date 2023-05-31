// ** Import React
import { useState } from "react";

// ** Import Assets
import assets from "../../assets/assets";

// ** Import Other
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";

const CardAuth = () => {
  const [input, setInput] = useState({ email: "", password: "" });

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://ec2-3-26-30-178.ap-southeast-2.compute.amazonaws.com:8088/api/v1/login",
        input
      );

      const { data } = res;

      Swal.fire("Success", `${data.message}`, "success");

      navigate("/dashboard");

      sessionStorage.setItem("token", data.data.token);
    } catch (error) {
      const {
        response: { data },
      } = error;

      Swal.fire(`${data.message}`, `${data.errors}`, "error");
    }
  };

  const validate = input.email === "" || input.password === "";

  return (
    <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-[676px] h-fit rounded-[24px] bg-[#FFFFFF] p-[32px] justify-center border-2 border-[#E1E4EA]">
      <h1 className="font-bold text-[32px] ">Login</h1>

      {/* <!-- Email input --> */}
      <label className="block font-semibold text-[20px] mt-[32px] -mb-[10px]">
        Email
      </label>
      <img
        src={assets.iconUsernameLogin}
        alt="iconUsernameLogin"
        className="relative top-[33px] left-[20px] right-[12px]"
      />
      <input
        type="email"
        name="email"
        value={input.email}
        onChange={handleInput}
        placeholder="Masukkan Email"
        className="rounded-[8px] border border-gray-400 bg-[#F9FAFB] focus:outline-blue-500 px-[50px] w-full h-[52px]"
      />

      {/* <!-- Password input --> */}
      <label className="block font-semibold text-[20px] mt-[24px] -mb-[10px]">
        Password
      </label>

      <img
        src={assets.iconPasswordLogin}
        alt="iconPasswordLogin"
        className="relative top-[34px] left-[20px] right-[12px]"
      />
      <input
        type="password"
        name="password"
        value={input.password}
        onChange={handleInput}
        placeholder="Masukkan Password"
        className="rounded-[8px] border border-gray-400 bg-[#F9FAFB] focus:outline-blue-500 px-[50px]  w-full h-[52px]"
      />

      {/* <!-- Button Masuk --> */}
      <button
        onClick={handleLogin}
        disabled={validate}
        className="w-[612px] h-[44px] mt-[64px] mb-[15px] rounded-[8px] font-semibold text-[16px] text-white bg-[#0080FF] disabled:bg-blue-200 disabled:cursor-not-allowed"
      >
        Masuk
      </button>
    </div>
    // </div>
  );
};

export default CardAuth;

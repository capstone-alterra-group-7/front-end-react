// ** Import Assets
import assets from "../../assets/assets";

// ** Import Other
import { Link, useNavigate } from "react-router-dom";

const CardAuth = () => {
  return (
    // <div className="w-full h-full absolute border border-blue-500 top-1/2 left-1/2">
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
        type="text"
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
        placeholder="Masukkan Password"
        className="rounded-[8px] border border-gray-400 bg-[#F9FAFB] focus:outline-blue-500 px-[50px]  w-full h-[52px]"
      />

      {/* <!-- Button Masuk --> */}
      <button className="w-[612px] h-[44px] mt-[64px] mb-[15px] rounded-[8px] font-semibold text-[16px] text-white bg-[#0080FF]">
        Masuk
      </button>
    </div>
    // </div>
  );
};

export default CardAuth;

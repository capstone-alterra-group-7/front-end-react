// ** Import React
import { useState } from "react";

// ** Import Assets
import assets from "../../assets/assets";

// ** Import Redux
import { useDispatch } from "react-redux";
import { addActive } from "../../redux/sidebar/NavItemSlices";
import { addLogin, addToken } from "../../redux/auth/tokenSlices";

// ** Import Other
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import { baseUrl } from "../../services/base";

const CardAuth = () => {
  // ** Local State
  const [input, setInput] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState(true);

  const handleInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleLogin = async () => {
    setLoading(true);

    try {
      const res = await axios.post(baseUrl("/login"), input);

      const { data } = res;

      // Swal.fire("Success", `${data.message}`, "success");

      setLoading(false);

      dispatch(addToken(data.data.token));

      dispatch(addActive("/dashboard"));

      dispatch(addLogin(true));

      navigate("/dashboard");

      sessionStorage.setItem("token", data.data.token);
    } catch (error) {
      const {
        response: { data },
      } = error;

      setLoading(false);

      Swal.fire(`${data.message}`, `${data.errors}`, "error");
    }
  };

  const handleKeypress = (e) => {
    if (e.key === "Enter") {
      handleLogin();
    }
  };
  const validate = input.email === "" || input.password === "";

  return (
    <div className="absolute top-1/2 transform -translate-x-1/2 -translate-y-1/2 left-1/2 w-[676px] h-fit rounded-[24px] bg-[#FFFFFF] p-[32px] justify-center border-2 border-[#E1E4EA]">
      <h1 className="font-bold text-[32px] ">Login</h1>

      {/* <!-- Email input --> */}
      <label className="block font-semibold text-[20px] mt-[32px] -mb-[10px]">Email</label>
      <img src={assets.iconUsernameLogin} alt="iconUsernameLogin" className="relative top-[33px] left-[20px] right-[12px]" />
      <input
        type="email"
        name="email"
        value={input.email}
        onChange={handleInput}
        onKeyUp={handleKeypress}
        placeholder="Masukkan Email"
        className="rounded-[8px] border border-gray-400 bg-[#F9FAFB] focus:outline-blue-500 px-[50px] w-full h-[52px]"
      />

      {/* <!-- Password input --> */}
      <label className="block font-semibold text-[20px] mt-[24px] -mb-[10px]">Password</label>

      <div className="relative">
        <img src={assets.iconPasswordLogin} alt="iconPasswordLogin" className="relative top-[34px] left-[20px] right-[12px]" />

        <input
          type={visible ? "password" : "text"}
          name="password"
          value={input.password}
          onChange={handleInput}
          onKeyUp={handleKeypress}
          placeholder="Masukkan Password"
          className="rounded-[8px] border border-gray-400 bg-[#F9FAFB] focus:outline-blue-500 px-[50px]  w-full h-[52px]"
        />

        <div className={`absolute right-5 ${visible ? "bottom-5" : "bottom-4"} cursor-pointer`} onClick={() => setVisible((prev) => !prev)}>
          {visible ? (
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M8.00008 3C8.53051 3 9.03922 3.21071 9.41429 3.58579C9.78937 3.96086 10.0001 4.46957 10.0001 5C10.0001 5.53043 9.78937 6.03914 9.41429 6.41421C9.03922 6.78929 8.53051 7 8.00008 7C7.46965 7 6.96094 6.78929 6.58587 6.41421C6.21079 6.03914 6.00008 5.53043 6.00008 5C6.00008 4.46957 6.21079 3.96086 6.58587 3.58579C6.96094 3.21071 7.46965 3 8.00008 3ZM8.00008 0C11.3334 0 14.1801 2.07333 15.3334 5C14.1801 7.92667 11.3334 10 8.00008 10C4.66675 10 1.82008 7.92667 0.666748 5C1.82008 2.07333 4.66675 0 8.00008 0ZM2.12008 5C3.22008 7.24 5.49341 8.66667 8.00008 8.66667C10.5067 8.66667 12.7801 7.24 13.8801 5C12.7801 2.76 10.5067 1.33333 8.00008 1.33333C5.49341 1.33333 3.22008 2.76 2.12008 5Z"
                fill="#717275"
              />
            </svg>
          ) : (
            <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M10.7333 7.86621L9.76667 6.89955C9.86667 6.37732 9.71667 5.88843 9.31667 5.43288C8.91667 4.97732 8.4 4.79954 7.76667 4.89954L6.8 3.93288C6.98889 3.84399 7.18056 3.77732 7.375 3.73288C7.56944 3.68843 7.77778 3.66621 8 3.66621C8.83333 3.66621 9.54167 3.95788 10.125 4.54121C10.7083 5.12454 11 5.83288 11 6.66621C11 6.88843 10.9778 7.09677 10.9333 7.29121C10.8889 7.48566 10.8222 7.67732 10.7333 7.86621ZM12.8667 9.96621L11.9 9.03288C12.3222 8.71066 12.6972 8.35788 13.025 7.97455C13.3528 7.59121 13.6333 7.1551 13.8667 6.66621C13.3111 5.54399 12.5139 4.65232 11.475 3.99121C10.4361 3.3301 9.27778 2.99954 8 2.99954C7.67778 2.99954 7.36111 3.02177 7.05 3.06621C6.73889 3.11066 6.43333 3.17732 6.13333 3.26621L5.1 2.23288C5.55556 2.04399 6.02222 1.90232 6.5 1.80788C6.97778 1.71343 7.47778 1.66621 8 1.66621C9.67778 1.66621 11.1722 2.1301 12.4833 3.05788C13.7944 3.98566 14.7444 5.18843 15.3333 6.66621C15.0778 7.32177 14.7417 7.9301 14.325 8.49121C13.9083 9.05232 13.4222 9.54399 12.8667 9.96621ZM13.2 14.0662L10.4 11.2995C10.0111 11.4218 9.61944 11.5134 9.225 11.5745C8.83056 11.6357 8.42222 11.6662 8 11.6662C6.32222 11.6662 4.82778 11.2023 3.51667 10.2745C2.20556 9.34677 1.25556 8.14399 0.666667 6.66621C0.9 6.07732 1.19444 5.5301 1.55 5.02454C1.90556 4.51899 2.31111 4.06621 2.76667 3.66621L0.933334 1.79954L1.86667 0.866211L14.1333 13.1329L13.2 14.0662ZM3.7 4.59954C3.37778 4.88843 3.08333 5.2051 2.81667 5.54954C2.55 5.89399 2.32222 6.26621 2.13333 6.66621C2.68889 7.78843 3.48611 8.6801 4.525 9.34121C5.56389 10.0023 6.72222 10.3329 8 10.3329C8.22222 10.3329 8.43889 10.319 8.65 10.2912C8.86111 10.2634 9.07778 10.2329 9.3 10.1995L8.7 9.56621C8.57778 9.59955 8.46111 9.62455 8.35 9.64121C8.23889 9.65788 8.12222 9.66621 8 9.66621C7.16667 9.66621 6.45833 9.37455 5.875 8.79121C5.29167 8.20788 5 7.49955 5 6.66621C5 6.54399 5.00833 6.42732 5.025 6.31621C5.04167 6.2051 5.06667 6.08843 5.1 5.96621L3.7 4.59954Z"
                fill="#717275"
              />
            </svg>
          )}
        </div>
      </div>

      {/* <!-- Button Masuk --> */}
      <button
        onClick={handleLogin}
        disabled={validate}
        className="w-[612px] h-[44px] mt-[64px] mb-[15px] rounded-[8px] font-semibold text-[16px] text-white bg-[#0080FF] disabled:bg-blue-200 disabled:cursor-not-allowed"
      >
        {loading ? "Loading..." : " Masuk"}
      </button>
    </div>
    // </div>
  );
};

export default CardAuth;

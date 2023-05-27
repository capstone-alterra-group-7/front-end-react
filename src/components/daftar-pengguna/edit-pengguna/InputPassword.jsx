// ** Import Others
import { useState } from "react";
import assets from "../../../assets/assets";

export default function InputPassword(props) {
    const {name, label, id, onChange, value} = props
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    function togglePasswordVisibility() {
        setIsPasswordVisible((prevState) => !prevState);
    }
    return (
        <div className="relative flex flex-col pb-5">
        <label 
            htmlFor={name}
            className='font-medium pb-3 text-black'>
                {label}
        </label>

        <input
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Password"
            className="w-full
            px-4
            py-2
            text-base
            border border-gray-300
            rounded
            outline-none
            focus:ring-blue-500 focus:border-blue-500 focus:ring-1"
            name={name} 
            id={id}
            onChange={onChange}
            value={value}
        />
        <button
          className="absolute inset-y-0 top-3 right-0 flex items-center px-4 text-gray-600"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? (
            <img src={assets.notVisiblePassword} alt="visiblepassword" />
          ) : (
            <img src={assets.visiblePassword} alt="notvisiblepassword" />
          )}
        </button>
      </div>
    )
}

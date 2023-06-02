import React from "react";

const InputTambahKa = (props) => {
  const { name, label, type, placeholder, value, onChange } = props;

  return (
    <div className="flex flex-col space-y-2 relative">
      <label htmlFor={name} className="text-[20px] font-[600] text-[#262627]">
        {label}
      </label>

      <input
        name={name}
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={`border border-[#D2D7E0] bg-[#F9FAFB] focus:outline-blue-500 ${
          label === "harga" ? "px-14" : "px-3 "
        } py-2 rounded-lg placeholder:text-[#717275] text-[20px] font-[400]`}
      />

      {label === "harga" && (
        <p className="absolute top-8 px-2 py-2 border-r left-2 text-[20px] font-[400] text-[#717275]">
          Rp
        </p>
      )}
    </div>
  );
};

export default InputTambahKa;

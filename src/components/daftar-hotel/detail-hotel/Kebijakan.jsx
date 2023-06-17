import React from "react";
import assets from "../../../assets/assets";

const Kebijakan = ({ children }) => {
  return (
    <div className="flex items-start mb-3">
      <img src={assets.iconNav} alt="" className="mr-5 w-6 h-6 mt-1 ms-1" />
      {children}
    </div>
  );
};

export default Kebijakan;

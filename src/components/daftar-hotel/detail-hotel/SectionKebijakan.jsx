import React from "react";

// ** import assest
import assets from "../../../assets/assets";

const SectionKebijakan = () => {
  return (
    <div className="p-4 pb-0 duration-500">
      {[...Array(6)].map((none, i) => {
        return (
          <div className="flex items-start mb-6" key={i}>
            <img src={assets.iconNav} alt="" className="mr-5 w-6 h-6 mt-1 ms-1" />
            <div>
              <h1 className="mb-1 font-semibold">Waktu Check-in/Check-out</h1>
              <h1 className="font-medium">
                Check-in: <span>Dari 14:00 - 23.59</span> Check-out: <span>Sebelum 12:00</span>
              </h1>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SectionKebijakan;

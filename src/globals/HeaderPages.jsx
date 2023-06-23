// ** Import React
import { useState } from "react";
import assets from "../assets/assets";

const HeaderPages = (props) => {
  const {
    title,
    setSearchVal,
    setModal,
    sort,
    placeholderSearch,
    textButton,
    setShowFilter,
  } = props;

  // ** Local State
  const [showUrutan, setShowUrutan] = useState(false);

  return (
    <div className="bg-white px-8 pr-7 pt-3 pb-6 space-y-6 border-b">
      <h1 className="text-[32px] font-bold">{title}</h1>

      <div className="flex justify-between gap-7">
        <div className="relative flex-1">
          <input
            type="text"
            placeholder={placeholderSearch}
            onChange={(e) => setSearchVal(e.target.value)}
            className="border w-full border-[#D2D7E0] py-[7.5px] px-11  rounded-lg focus:outline-none text-[16px] placeholder:text-[#96989C] placeholder:font-[400]"
          />

          <div className="absolute top-[10px] left-4">
            <svg
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.91667 2.96997C9.35326 2.96997 10.731 3.54065 11.7468 4.55648C12.7627 5.5723 13.3333 6.95005 13.3333 8.38664C13.3333 9.7283 12.8417 10.9616 12.0333 11.9116L12.2583 12.1366H12.9167L17.0833 16.3033L15.8333 17.5533L11.6667 13.3866V12.7283L11.4417 12.5033C10.4917 13.3116 9.25833 13.8033 7.91667 13.8033C6.48008 13.8033 5.10233 13.2326 4.0865 12.2168C3.07068 11.201 2.5 9.82323 2.5 8.38664C2.5 6.95005 3.07068 5.5723 4.0865 4.55648C5.10233 3.54065 6.48008 2.96997 7.91667 2.96997ZM7.91667 4.63664C5.83333 4.63664 4.16667 6.3033 4.16667 8.38664C4.16667 10.47 5.83333 12.1366 7.91667 12.1366C10 12.1366 11.6667 10.47 11.6667 8.38664C11.6667 6.3033 10 4.63664 7.91667 4.63664Z"
                fill="#717275"
              />
            </svg>
          </div>
        </div>

        <div
          className={`flex gap-7 ${setShowFilter ? "w-[32rem]" : "w-[26rem]"}`}
        >
          <div className="relative">
            <div
              onClick={() => setShowUrutan((prev) => !prev)}
              className="relative"
            >
              <button className="w-full px-12 py-[7.5px]  rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#4B4C4E] font-[400] text-[16px]  cursor-pointer">
                <p className="-ml-4">Sort</p>
                <div className="absolute top-[16px] right-[25px]">
                  <svg
                    width="15"
                    height="11"
                    viewBox="0 0 15 11"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0 10.47V8.8033H5V10.47H0ZM0 6.3033V4.63664H10V6.3033H0ZM0 2.13664V0.469971H15V2.13664H0Z"
                      fill="#717275"
                    />
                  </svg>
                </div>
              </button>
            </div>

            {showUrutan ? (
              <div className="absolute mt-2 bg-white w-[256px] h-[105px] p-5 shadow-[0_3px_10px_rgb(0,0,0,0.2)] rounded-2xl space-y-4">
                {sort}
              </div>
            ) : null}
          </div>

          {setShowFilter && (
            <div onClick={() => setShowFilter(true)} className="relative">
              <button className="w-full px-12 text-left py-[8px] rounded-lg bg-[#F9FAFB] border border-[#D2D7E0] text-[#4B4C4E]  font-[500] text-[18px] focus:outline-none cursor-pointer">
                <p className="-ml-5 text-[16px]">Filter</p>
              </button>

              <img
                src={assets.iconFilterDaftarKa}
                className="absolute top-[13px] right-6"
                alt="urutkan"
              />
            </div>
          )}

          <button
            onClick={() => setModal(true)}
            className="bg-[#0080FF] w-full px-2 py-[8px] text-white rounded-lg flex items-center justify-center gap-2"
          >
            <h1 className=" text-[16px] font-[500]">{textButton}</h1>
            <img src={assets.iconTambahKaDaftarKa} alt="tambah" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderPages;

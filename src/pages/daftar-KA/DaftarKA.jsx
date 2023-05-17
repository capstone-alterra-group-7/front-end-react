// ** Import React
import React, { useEffect } from "react";

// ** Import Components
import ModalDaftarKa from "../../components/daftar-ka/detail-kursi/ModalDaftarKa";
import CardContainer from "../../components/daftar-ka/CardContainer";
import SelectFilter from "../../components/daftar-ka/SelectFilter";
import SelectSort from "../../components/daftar-ka/SelectSort";

// ** Import Tw Elements
import { Modal, Ripple, initTE } from "tw-elements";

// ** import Other
import { useNavigate } from "react-router-dom";

const DaftarKA = () => {
  useEffect(() => {
    initTE({ Modal, Ripple });
  }, []);

  const navigate = useNavigate("");

  const handleAdd = () => {
    navigate("/daftar-ka/tambah-ka");
  };

  return (
    <div className="relative w-full">
      <div className=" bg-white h-[158px] py-4 flex flex-col justify-center items-center">
        <h1 className="text-4xl font-bold w-[1064px] mt-4">Daftar KA</h1>
        <div class=" mb-4 flex  mt-10 w-[1064px]">
          {/* Searchbar */}
          <form>
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="font-sans text-xl block p-4 pl-10 focus:ring-1 focus:outline-none focus:ring-[#0080FF] hover:ring-[#0080FF] w-[504px] h-[52px] rounded-lg py-[12.5px] border-[1px] border-[#D2D7E0]"
                placeholder="Search"
                required
              />
            </div>
          </form>
          {/* Select Sorting */}
          <SelectSort />
          <SelectFilter />
          {/* Button */}
          <button
            data-te-toggle="modal"
            data-te-target="#modal-daftar-ka"
            className="w-[187px] h-[52px] px-8 py-[13.5px] font-bold text-white bg-[#0080FF] flex rounded-lg"
          >
            <span className="mr-[11px]">Tambah KA</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.5 3.5L18 2l-1.5 1.5L15 2l-1.5 1.5L12 2l-1.5 1.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2v20l1.5-1.5L6 22l1.5-1.5L9 22l1.5-1.5L12 22l1.5-1.5L15 22l1.5-1.5L18 22l1.5-1.5L21 22V2l-1.5 1.5zM19 19.09H5V4.91h14v14.18zM6 15h12v2H6zm0-4h12v2H6zm0-4h12v2H6z"
              />
            </svg>
          </button>
        </div>
      </div>

      <ModalDaftarKa
        title="Ingin Menambahkan Data KA?"
        subTitle="This blog post has been published. Team members will be able to edit this post and republish changes."
        titleButton="Iya, Tambahkan"
        handleAdd={handleAdd}
      />

      <CardContainer />
    </div>
  );
};

export default DaftarKA;

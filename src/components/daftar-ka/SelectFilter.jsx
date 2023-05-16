import React from "react";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Select, Option } from "@material-tailwind/react";

const SelectFilter = () => {
  //   function classNames(...classes) {
  //     return classes.filter(Boolean).join(" ");
  //   }
  return (
    <div className="relative w-[133px] h-[52px] mx-4">
      <select className="font-sans text-lg appearance-none cursor-pointer w-[133px] h-[52px]  ps-8 absolute rounded-lg py-[12.5px] border-[1px] border-[#D2D7E0] leading-tight focus:outline-none focus:shadow-outline">
        <option value="default">Filter</option>
        <option value="1">Harga </option>
        <option value="2">2</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-[28px] flex items-center text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M11 20q-.425 0-.713-.288T10 19v-6L4.2 5.6q-.375-.5-.113-1.05T5 4h14q.65 0 .913.55T19.8 5.6L14 13v6q0 .425-.288.713T13 20h-2Zm1-7.7L16.95 6h-9.9L12 12.3Zm0 0Z"
          />
        </svg>
      </div>
    </div>
  );
};

export default SelectFilter;

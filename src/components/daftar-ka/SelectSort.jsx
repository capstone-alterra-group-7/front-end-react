import React from "react";
// import { Fragment } from "react";
// import { Menu, Transition } from "@headlessui/react";
// import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Select, Option } from "@material-tailwind/react";

const SelectSort = () => {
  //   function classNames(...classes) {
  //     return classes.filter(Boolean).join(" ");
  //   }
  return (
    <div className="relative w-[192px] h-[52px] me-4">
      <select className="font-sans text-xl appearance-none cursor-pointer w-[192px] h-[52px] mx-4 absolute rounded-lg py-[12.5px] border-[1px] border-[#D2D7E0] px-4 leading-tight focus:outline-none focus:shadow-outline">
        <option value="default">Urutkan</option>
        <option value="1">1</option>
        <option value="2">2</option>
      </select>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
        <svg
          className="fill-current w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
        >
          <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
        </svg>
      </div>
    </div>
  );
};

export default SelectSort;

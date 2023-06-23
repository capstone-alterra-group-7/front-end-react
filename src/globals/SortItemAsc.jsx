import React from "react";

const SortItemAsc = (props) => {
  const { urutkan, setUrutkan, title1, title2 } = props;

  return (
    <>
      <div className="flex gap-3 items-center">
        <input
          type="radio"
          onChange={(e) => setUrutkan(e.target.value)}
          checked={urutkan === "asc"}
          value="asc"
          name="urutkan"
        />

        <label className="text-[#262627] font-[400] text-[16px]">
          {title1}
        </label>
      </div>
      <div className="flex gap-3 items-center">
        <input
          onChange={(e) => setUrutkan(e.target.value)}
          checked={urutkan === "desc"}
          type="radio"
          value="desc"
          name="urutkan"
        />

        <label className="text-[#262627] font-[400] text-[16px]">
          {title2}
        </label>
      </div>
    </>
  );
};

export default SortItemAsc;

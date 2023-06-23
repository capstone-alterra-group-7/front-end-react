import React from "react";

const FilterItemKeaktifan = (props) => {
  const { filter, setFilter } = props;

  return (
    <div className="mt-9 space-y-3">
      <h1 className="text-[#262627] font-[600] text-[16px]">
        Status Keaktifan
      </h1>

      <div className="flex gap-8 ml-2">
        <div className="flex gap-3 items-center">
          <input
            type="radio"
            value="active"
            onChange={(e) => setFilter(e.target.value)}
            checked={filter === "active"}
            name="filter"
          />

          <label className="text-[#262627] font-[400] text-[16px]">Aktif</label>
        </div>

        <div className="flex gap-3 items-center">
          <input
            type="radio"
            value="inactive"
            name="filter"
            onChange={(e) => setFilter(e.target.value)}
            checked={filter === "inactive"}
          />

          <label className="text-[#262627] font-[400] text-[16px]">
            Non Aktif
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterItemKeaktifan;

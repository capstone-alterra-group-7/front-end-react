import React from "react";

const FilterItemStatusPesanan = (props) => {
  const { filter, setFilter } = props;

  return (
    <div className="mt-9">
      <h1 className="text-[#262627] font-[600] text-[16px]">Status Pesanan</h1>
      <div className="flex items-start gap-6">
        <div className="flex flex-col gap-4 ml-2 mt-4">
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              value="unpaid"
              onChange={(e) => setFilter(e.target.value)}
              checked={filter === "unpaid"}
              name="filter"
            />

            <label className="text-[#262627] font-[400] text-[16px]">
              Unpaid
            </label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              value="paid"
              name="filter"
              onChange={(e) => setFilter(e.target.value)}
              checked={filter === "paid"}
            />

            <label className="text-[#262627] font-[400] text-[16px]">
              Paid
            </label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              value="done"
              name="filter"
              onChange={(e) => setFilter(e.target.value)}
              checked={filter === "done"}
            />

            <label className="text-[#262627] font-[400] text-[16px]">
              Done
            </label>
          </div>
        </div>

        <div className="flex flex-col gap-4 ml-2 mt-4">
          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              value="canceled"
              name="filter"
              onChange={(e) => setFilter(e.target.value)}
              checked={filter === "canceled"}
            />

            <label className="text-[#262627] font-[400] text-[16px]">
              Canceled
            </label>
          </div>

          <div className="flex gap-3 items-center">
            <input
              type="checkbox"
              value="refund"
              name="filter"
              onChange={(e) => setFilter(e.target.value)}
              checked={filter === "refund"}
            />

            <label className="text-[#262627] font-[400] text-[16px]">
              Refund
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterItemStatusPesanan;

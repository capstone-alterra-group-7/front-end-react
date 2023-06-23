const ModalFilter = (props) => {
  const { filter, setFilter, setShowFilter, setSaveFilter, contentFilter } =
    props;

  return (
    <div className="fixed left-0 right-0 top-0 bottom-0 flex justify-center items-center bg-gray-700/50">
      <div className="w-[800px]  h-[400px] rounded-2xl bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)] p-5">
        <h1 className="font-[600] text-[24px] text-[#262627]">Filter</h1>

        <div className="flex justify-between items-center mt-5">
          <div
            onClick={() => setShowFilter(false)}
            className="flex gap-2 items-center cursor-pointer"
          >
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99967 13.6668L0.333008 7.00016L6.99967 0.333496L8.18717 1.50016L3.52051 6.16683H13.6663V7.8335H3.52051L8.18717 12.5002L6.99967 13.6668Z"
                fill="#0080FF"
              />
            </svg>

            <h5 className="text-[#0080FF] font-[600] text-[16px]">Kembali</h5>
          </div>

          <div className="flex items-center gap-8">
            <h5
              onClick={() => setFilter("")}
              className="text-[#0080FF] font-[600] text-[16px] cursor-pointer"
            >
              Reset Filter
            </h5>

            <button
              onClick={() => [setSaveFilter(filter), setShowFilter(false)]}
              className="py-2 px-3 bg-[#0080FF] rounded-md text-white"
            >
              Terapkan Fiter
            </button>
          </div>
        </div>

        {contentFilter}
      </div>
    </div>
  );
};

export default ModalFilter;

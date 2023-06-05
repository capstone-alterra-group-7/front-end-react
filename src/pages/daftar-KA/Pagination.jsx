const Pagination = (props) => {
  const { changePage, setChangePage, isLoading, entries, infoPaginate } = props;

  return (
    <>
      <div className="mb-[80px]"></div>
      <div className="absolute bottom-0 flex items-center justify-between px-7 border-t-2 w-full py-4 bg-white ">
        <button
          disabled={changePage === 1 || isLoading}
          className="disabled:cursor-not-allowed border border-[#D2D7E0] bg-[#F9FAFB] text-[#262627] py-2 px-5 rounded-lg flex items-center gap-2 disabled:bg-[#FDFDFE] disabled:border-gray-200 disabled:text-gray-300"
          onClick={() => setChangePage((prev) => prev - 1)}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.99998 13.6668L0.333313 7.00016L6.99998 0.333496L8.18748 1.50016L3.52081 6.16683H13.6666V7.8335H3.52081L8.18748 12.5002L6.99998 13.6668Z"
              fill={`${changePage == 1 || isLoading ? "#D6DADF" : "#262627"}`}
            />
          </svg>
          Previous
        </button>

        <p className="text-slate-800 mr-5">
          {isLoading
            ? "..."
            : `Page ${infoPaginate?.current_page} - ${entries} Entries`}
        </p>

        <button
          disabled={infoPaginate?.next_page === null || isLoading}
          className="disabled:cursor-not-allowed border border-[#D2D7E0] bg-[#F9FAFB] text-[#262627] py-2 px-8 rounded-lg flex items-center gap-2 disabled:bg-[#FDFDFE] disabled:border-gray-200 disabled:text-gray-300 font-600"
          onClick={() => setChangePage((prev) => prev + 1)}
        >
          Next{" "}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.00004 13.6668L5.81254 12.5002L10.4792 7.8335H0.333374V6.16683H10.4792L5.81254 1.50016L7.00004 0.333496L13.6667 7.00016L7.00004 13.6668Z"
              fill={`${
                infoPaginate?.next_page === null || isLoading
                  ? "#D6DADF"
                  : "#262627"
              }`}
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Pagination;

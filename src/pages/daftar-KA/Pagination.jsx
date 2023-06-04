import ReactPaginate from "react-paginate";

const Pagination = () => {
  return (
    <ReactPaginate
      breakLabel={<span className="mr-4">...</span>}
      nextLabel={
        <button className="bg-[#F9FAFB] px-3 py-2 border border-[#D2D7E0] rounded-lg text-[#262627]">
          Next
        </button>
      }
      // onPageChange={handlePageClick}
      pageRangeDisplayed={3}
      pageCount={2}
      previousLabel={
        <button className="bg-[#F9FAFB] px-3 py-2 border border-[#D2D7E0] rounded-lg text-[#262627] mr-4">
          Previous
        </button>
      }
      containerClassName="flex justify-center items-center mt-8"
      pageClassName="block bg-gray-400 w-10 h-10 flex justify-center items-center rounded-md mr-4"
      activeClassName="bg-[#F5F6F8] "
    />
  );
};

export default Pagination;

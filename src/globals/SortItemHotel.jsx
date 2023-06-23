const SortItemHotel = (props) => {
  const { urutkan, setUrutkan } = props;

  return (
    <>
      <div className="flex gap-3 items-center">
        <input
          type="radio"
          onChange={(e) => setUrutkan(e.target.value)}
          checked={urutkan === "latest"}
          value="latest"
          name="urutkan"
        />

        <label className="text-[#262627] font-[400] text-[16px]">Latest</label>
      </div>

      <div className="flex gap-3 items-center">
        <input
          onChange={(e) => setUrutkan(e.target.value)}
          checked={urutkan === "oldest"}
          type="radio"
          value="oldest"
          name="urutkan"
        />

        <label className="text-[#262627] font-[400] text-[16px]">Oldest</label>
      </div>

      <div className="flex gap-3 items-center">
        <input
          onChange={(e) => setUrutkan(e.target.value)}
          checked={urutkan === "highest_price"}
          type="radio"
          value="highest_price"
          name="urutkan"
        />

        <label className="text-[#262627] font-[400] text-[16px]">
          Highest Price
        </label>
      </div>

      <div className="flex gap-3 items-center">
        <input
          onChange={(e) => setUrutkan(e.target.value)}
          checked={urutkan === "lowest_price"}
          type="radio"
          value="lowest_price"
          name="urutkan"
        />

        <label className="text-[#262627] font-[400] text-[16px]">
          Lowest Price
        </label>
      </div>
    </>
  );
};

export default SortItemHotel;

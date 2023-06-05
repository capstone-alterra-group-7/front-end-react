// ** Import Assets
import assets from "../../../assets/assets";

const ButtonNavigation = (props) => {
  const { disable, setPage, sebelumnya, selanjutnya } = props;

  return (
    <button
      disabled={disable}
      onClick={() =>
        sebelumnya ? setPage((prev) => prev - 1) : setPage((prev) => prev + 1)
      }
      className={`flex items-center disabled:cursor-not-allowed ${
        selanjutnya && "flex-row-reverse"
      } ${
        sebelumnya ? "ring-gray-200" : "ring-[#D2D7E0]"
      } gap-3 bg-[##F9FAFB] ring-1  py-2 rounded-xl px-6`}
    >
      <img
        src={
          sebelumnya ? assets.iconLeftDetailKursi : assets.iconRigthDetailKursi
        }
        alt="left"
      />

      <h5
        className={` ${sebelumnya && "text-gray-500/80"} ${
          selanjutnya && "text-[#4B4C4E]"
        } text-[16px] font-[500]`}
      >
        {sebelumnya && "Sebelumnya"}

        {selanjutnya && "Selanjutnya"}
      </h5>
    </button>
  );
};

export default ButtonNavigation;

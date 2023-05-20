// ** Import Assets
import assets from "../../../assets/assets";

const ButtonNavigation = (props) => {
  const { sebelumnya, selanjutnya, dummyData, dummyData2, setDummy } = props;

  const handleSelanjutnya = () => {
    setDummy({ title: "Gerbong 2", dummyData: dummyData2 });
  };

  const handleSebelumnya = () => {
    setDummy({ title: "Gerbong 1", dummyData });
  };

  return (
    <button
      onClick={
        (sebelumnya && handleSebelumnya) || (selanjutnya && handleSelanjutnya)
      }
      className={`flex items-center ${selanjutnya && "flex-row-reverse"} ${
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

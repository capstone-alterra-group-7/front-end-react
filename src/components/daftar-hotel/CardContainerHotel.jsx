// ** Import Components
import CardHotel from "./CardHotel";

const CardContainerHotel = ({ dataHotel }) => {
  return (
    <div className="py-8 px-7">
      {dataHotel?.data?.map((data, idx) => {
        return <CardHotel data={data} key={idx} />;
      })}
    </div>
  );
};

export default CardContainerHotel;

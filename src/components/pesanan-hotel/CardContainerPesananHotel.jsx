// ** Import Components
import CardPesananHotel from "./CardPesananHotel";

const CardContainerPesananHotel = ({ daftarHotel }) => {
  return (
    <div className="py-8 px-7">
      {daftarHotel?.data?.map((data, idx) => {
        return <CardPesananHotel data={data} key={idx} />;
      })}
    </div>
  );
};

export default CardContainerPesananHotel;

// ** Import Others
import { useSelector } from "react-redux";

// * Import Components
import BarDaftarTiket from "../../components/daftar-tiket/BarDaftarTiket";
import CardDaftarTiket from "../../components/daftar-tiket/CardDaftarTiket";


const DaftarTiket = () => {
  const daftarTiket = useSelector((state) => state.daftarTiket)
  return (
    <div>
      <BarDaftarTiket/>
      <div className="">

        {/* {daftarTiket.map((tiket, index) => (
          <CardDaftarTiket data={tiket} index={index}/>
        ))} */}
        <CardDaftarTiket/>
      </div>
    </div>
  )
};

export default DaftarTiket;

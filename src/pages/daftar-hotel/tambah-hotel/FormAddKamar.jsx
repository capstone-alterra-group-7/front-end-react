import React, { useEffect, useState } from "react";

//** Import Others
import assets from "../../../assets/assets";
import { useNavigate } from "react-router-dom";

//** Import Components
import ImageAddKamar from "../../../components/daftar-hotel/tambah-hotel/daftar-kamar/ImageAddKamar";
import AddFasilitasKamar from "../../../components/daftar-hotel/tambah-hotel/daftar-kamar/AddFasilitasKamar";
import NavTambahKamar from "../../../components/daftar-hotel/tambah-hotel/daftar-kamar/NavTambahKamar";
import FormInformasiKamar from "../../../components/daftar-hotel/tambah-hotel/daftar-kamar/FormInformasiKamar";
import FormPenawaranKamar from "../../../components/daftar-hotel/tambah-hotel/daftar-kamar/FormPenawaranKamar";

const FormAddKamar = (props) => {
  const { dataKamar, setDataKamar, clicked, setClicked } = props;

  const [fasilitas, setFasilitas] = useState([]);
  const [imageUrl, setImageUrl] = useState([]);
  const [breakfastVal, setBreakfastVal] = useState("");
  const [nav, setNav] = useState("informasi");

  useEffect(() => {
    setDataKamar((prev) => ({ ...prev, hotel_room_facility: fasilitas }));
  }, [fasilitas]);

  return (
    <div className="bg-[#EBEDF1] px-36 py-12">
      <div className="bg-white rounded-[2rem]">
        <NavTambahKamar nav={nav} setNav={setNav} />
        {nav === "informasi" ? (
          <FormInformasiKamar fasilitas={fasilitas} setFasilitas={setFasilitas} imageUrl={imageUrl} setImageUrl={setImageUrl} setDataKamar={setDataKamar} dataKamar={dataKamar} />
        ) : (
          <FormPenawaranKamar
            fasilitas={fasilitas}
            setFasilitas={setFasilitas}
            setDataKamar={setDataKamar}
            dataKamar={dataKamar}
            clicked={clicked}
            setClicked={setClicked}
            breakfastVal={breakfastVal}
            setBreakfastVal={setBreakfastVal}
          />
        )}
      </div>
    </div>
  );
};

export default FormAddKamar;

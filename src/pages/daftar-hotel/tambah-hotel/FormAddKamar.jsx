import React, { useEffect, useState } from "react";

//** Import Components
import NavTambahKamar from "../../../components/daftar-hotel/tambah-hotel/daftar-kamar/NavTambahKamar";
import FormInformasiKamar from "../../../components/daftar-hotel/tambah-hotel/daftar-kamar/FormInformasiKamar";
import FormPenawaranKamar from "../../../components/daftar-hotel/tambah-hotel/daftar-kamar/FormPenawaranKamar";

const FormAddKamar = (props) => {
  const { dataKamar, setDataKamar, clicked, setClicked } = props;

  const [fasilitas, setFasilitas] = useState(dataKamar?.hotel_room_facility);
  const [imageUrl, setImageUrl] = useState(dataKamar?.hotel_room_image);
  const [nav, setNav] = useState("informasi");

  useEffect(() => {
    setDataKamar((prev) => ({ ...prev, hotel_room_facility: fasilitas?.filter((x) => x.name !== "") }));
  }, [fasilitas]);

  return (
    <div className="bg-[#EBEDF1] px-36 py-12">
      <div className="bg-white rounded-[2rem]">
        <NavTambahKamar nav={nav} setNav={setNav} />
        {nav === "informasi" ? (
          <FormInformasiKamar
            fasilitas={fasilitas}
            setFasilitas={setFasilitas}
            imageUrl={imageUrl}
            setImageUrl={setImageUrl}
            setDataKamar={setDataKamar}
            dataKamar={dataKamar}
          />
        ) : (
          <FormPenawaranKamar setDataKamar={setDataKamar} dataKamar={dataKamar} clicked={clicked} setClicked={setClicked} />
        )}
      </div>
    </div>
  );
};

export default FormAddKamar;

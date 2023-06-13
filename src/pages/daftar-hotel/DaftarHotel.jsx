// Import React
import React, { useState } from "react";

// Import Components
import HeaderHotel from "../../components/daftar-hotel/Header";
import CardContainerHotel from "../../components/daftar-hotel/CardContainerHotel";
import ModalDaftarHotel from "../../components/daftar-hotel/ModalDaftarHotel";

// ** import Other
import { useNavigate } from "react-router-dom";

const DaftarHotel = () => {
  const [modal, setModal] = useState(false);

  const navigate = useNavigate("");

  const handleAdd = () => {
    navigate("/daftar-hotel/tambah-hotel");
  };

  return (
    <div className="relative">
      <div className=" bg-white px-7 pt-3 pb-6 space-y-6">
        <h1 className="text-[34px] font-bold">Daftar Hotel</h1>
        <HeaderHotel setModal={setModal} />
      </div>

      <CardContainerHotel />

      {modal && (
        <ModalDaftarHotel
          title="Ingin Menambahkan Data Hotel?"
          description=" This blog post has been published. Team members will be able to edit this post and republish changes."
          bgButton="bg-[#0080FF]"
          titleButton="Iya, Tambahkan"
          setModal={setModal}
          handle={handleAdd}
        />
      )}
    </div>
  );
};

export default DaftarHotel;

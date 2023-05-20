// ** Import React
import { useState } from "react";

// ** Import Components
import CardContainer from "../../components/daftar-ka/CardContainer";
import ModalDaftarKa from "../../components/daftar-ka/ModalDaftarKa";
import Bar from "../../components/daftar-ka/Bar";

// ** import Other
import { useNavigate } from "react-router-dom";

const DaftarKA = () => {
  // ** Local State
  const [modal, setModal] = useState(false);

  const navigate = useNavigate("");

  const handleAdd = () => {
    navigate("/daftar-ka/tambah-ka");
  };

  return (
    <div className="relative">
      <div className=" bg-white px-7 pt-3 pb-6 space-y-6">
        <h1 className="text-[34px] font-bold">Daftar KA</h1>

        <Bar setModal={setModal} />
      </div>

      <CardContainer />

      {modal && (
        <ModalDaftarKa
          title="Ingin Menambahkan Data KA?"
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

export default DaftarKA;

// ** Import Assets
import assets from "../../assets/assets";

// ** Import Components
import Bar from "../../components/daftar-pengguna/Bar";
import ModalDaftarPengguna from "../../components/daftar-pengguna/ModalDaftarPengguna";
import TablePengguna from "../../components/daftar-pengguna/TablePengguna";

// ** Import Others
import { useState } from "react";
import { useNavigate } from "react-router-dom";


const DaftarPengguna = () => {
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("")
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/tambah-pengguna");
  };

  return (
    <div className="relative">
      <div className="bg-white px-7 pt-3 pb-6 space-y-6">

          <h1 className="text-[32px] font-bold">Daftar Pengguna</h1>

        <Bar 
          setModal={setModal}
          setSearch={setSearch} />
      </div>
      <TablePengguna/>

      {modal && (
        <ModalDaftarPengguna
          title="Ingin Menambahkan Pengguna Baru?"
          description=" This blog post has been published. Team members will be able to edit this post and republish changes."
          bgButton="bg-[#0080FF]"
          titleButton="Iya, Tambahkan Pengguna"
          setModal={setModal}
          handle={handleAdd}
        />
      )}

    </div>
  )
};

export default DaftarPengguna;

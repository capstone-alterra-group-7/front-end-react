// ** Import Assets
import assets from "../../assets/assets";

// ** Import Components
import Bar from "../../components/daftar-pengguna/Bar";
import ModalDaftarPengguna from "../../components/daftar-pengguna/ModalDaftarPengguna";
import TablePengguna from "../../components/daftar-pengguna/TablePengguna";

// ** Import Others
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ModalFilter from "./ModalFilter";


const DaftarPengguna = () => {
  const [modal, setModal] = useState(false);
  const [search, setSearch] = useState("")
  const [urutkan, setUrutkan] = useState("");
  const [filter, setFilter] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [saveFilter, setSaveFilter] = useState("");
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
          setSearch={setSearch}
          urutkan={urutkan}
          setUrutkan={setUrutkan}
          setShowFilter={setShowFilter}
          saveFilter={saveFilter} />
      </div>
      <TablePengguna
        urutkan={urutkan}
        search={search}/>

      {modal && (
        <ModalDaftarPengguna
          title="Ingin Menambahkan Pengguna Baru?"
          description="Anda akan menambahkan data pengguna baru. Apakah Anda yakin ingin melanjutkan?"
          bgButton="bg-[#0080FF]"
          titleButton="Tambahkan Pengguna"
          setModal={setModal}
          handle={handleAdd}
        />
      )}

      {showFilter && (
        <ModalFilter
          filter={filter}
          setFilter={setFilter}
          setShowFilter={setShowFilter}
          setSaveFilter={setSaveFilter}
        />
      )}    
    </div>
  )
};

export default DaftarPengguna;

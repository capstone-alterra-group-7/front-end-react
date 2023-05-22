// ** Import React
import { useState } from "react";

// ** Import Other
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { tambahKa } from "../../../redux/daftar-ka/daftarKaSlices";
import HeaderTambahKa from "../../../components/daftar-ka/tambah-ka/HeaderTambahKa";
import ModalDaftarKa from "../../../components/daftar-ka/ModalDaftarKa";
import NavDetailka from "../../../components/daftar-ka/NavDetailka";
import FormTambahKa from "../../../components/daftar-ka/tambah-ka/FormTambahKa";
import GerbongDaftarKa from "../../../components/daftar-ka/tambah-ka/GerbongDaftarKa";

const TambahKa = () => {
  // ** Local State
  const [input, setInput] = useState({
    status: "nonactive",
    code_train: "",
    name: "",
    rute: [],
  });

  console.log(input);
  const [nav, setNav] = useState("informasi");
  const [modal, setModal] = useState(false);

  const handleOnChangeInput = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const validate =
    input.code_train === "" || input.name === "" || input.rute.length === 0;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleTambahKa = () => {
    dispatch(tambahKa({ id: Math.random(), ...input }));
    navigate("/daftar-ka");
  };

  return (
    <div className="absolute left-0 right-0 bg-[#F5F6F8] pb-20">
      <HeaderTambahKa validate={validate} setModal={setModal} />

      <div className="w-[1142px] min-h-full mt-[64px] mx-auto bg-white rounded-3xl shadow-[0_1px_10px_rgb(0,0,0,0.2)]">
        <NavDetailka nav={nav} setNav={setNav} />

        {nav === "informasi" ? (
          <FormTambahKa
            input={input}
            setInput={setInput}
            handleOnChangeInput={handleOnChangeInput}
          />
        ) : (
          <GerbongDaftarKa />
        )}
      </div>

      {modal && (
        <ModalDaftarKa
          title="Ingin Menyimpan?"
          description=" This blog post has been published. Team members will be able to edit this post and republish changes."
          bgButton="bg-[#0080FF]"
          titleButton="Iya, Simpan"
          setModal={setModal}
          validate={validate}
          handle={handleTambahKa}
        />
      )}
    </div>
  );
};

export default TambahKa;

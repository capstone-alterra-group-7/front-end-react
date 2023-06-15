// ** Import Assets
import assets from "../../../assets/assets"

export default function BarEditPengguna({setModal, setModalBack, validate}) {
  return (
    <>
        <div className="flex justify-between items-center">
            
            <button 
                className="flex items-center"
                onClick={() => setModalBack(true)}>
                <img src={assets.iconBackDaftarKa} alt="back" />
                <span className="ms-2 text-[#0080FF]">Kembali</span>
            </button>
            

            <div className="flex gap-3">
                <button
                    disabled={validate}
                    className="px-8 py-3 font-[500] bg-[#0080FF] flex items-center gap-2 rounded-lg disabled:bg-[#8fc7ff]"
                    onClick={() => setModal(true)}
                >
                    <span className="ms-2 text-[18px] text-white ">Simpan Pengguna</span>

                    <img src={assets.iconnav} alt="delete" />
                </button>
            </div>
        </div>
    </>
  )
}

// ** Import Assets
import assets from "../../../assets/assets";

const ModalDaftarKa = (props) => {
  const { title, subTitle, titleButton, handleAdd, bgButton } = props;

  const handle = () => {
    handleAdd();
  };

  return (
    <div
      data-te-modal-init=""
      className="fixed left-0 top-[173px] z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none "
      id="modal-daftar-ka"
      tabIndex={-1}
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div
        data-te-modal-dialog-ref=""
        className="pointer-events-none relative w-auto translate-y-[-50px] opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:max-w-[500px]"
      >
        <div className="min-[576px]:shadow-[0_0.5rem_1rem_rgba(#000, 0.15)] pointer-events-auto relative flex w-full flex-col rounded-2xl border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
          <div className="flex flex-shrink-0 items-center justify-between rounded-t-2xl  px-9 pt-7 dark:border-opacity-50 bg-white">
            <img src={assets.iconKeretaModalDaftarKa} alt="kereta" />
          </div>

          <div className="relative flex-auto px-9 py-7 bg-white space-y-2">
            <h5 className="text-[#262627] text-[24px] font-[700]">{title}</h5>

            <p className="text-[#717275] text-[16px] font-[400]">{subTitle}</p>
          </div>

          <div className="flex items-center justify-center gap-3 py-3 pb-8 rounded-b-2xl px-9  bg-white">
            <button
              className="border border-[#D2D7E0] py-[10px] rounded-xl w-full text-[#4B4C4E] text-[18px] font-[600]"
              data-te-modal-dismiss=""
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              Tidak
            </button>

            <button
              onClick={handle}
              className={`border border-[#D2D7E0] ${
                bgButton ? "bg-[#DB2D24]" : "bg-[#0080FF]"
              }  py-[10px] rounded-xl w-full text-[#F9FAFB] text-[18px] font-[600]`}
              data-te-modal-dismiss=""
              data-te-ripple-init=""
              data-te-ripple-color="light"
            >
              {titleButton}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalDaftarKa;

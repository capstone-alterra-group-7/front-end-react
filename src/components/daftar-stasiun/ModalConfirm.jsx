import React from "react";

const ModalConfirm = (props) => {
  const { setModal, handle, title, desc, bg, cancel, confirm, loading } = props;

  return (
    <div className="fixed z-50 duration-500 -top-6 right-0 left-0 bottom-0 flex justify-center items-center bg-gray-700/50">
      <div className="bg-white w-[500px] h-64 rounded-xl p-8">
        <h1 className="text-2xl font-semibold">{title}</h1>
        <h1 className="text-[15px] text-[#717275] mt-6">{desc}</h1>

        <div className="grid grid-cols-2 gap-4 mt-12">
          <button
            disabled={loading}
            className="py-[10px] border text-[#4B4C4E] border-[#D2D7E0] rounded-lg text-lg disabled:cursor-not-allowed"
            onClick={() => {
              setModal(false);
            }}
          >
            {cancel}
          </button>
          <button
            disabled={loading}
            className={`py-[10px] border text-[#FFFFFF] rounded-lg text-lg ${bg} disabled:bg-gray-500 disabled:cursor-not-allowed`}
            onClick={handle}
          >
            {loading ? "Loading..." : confirm}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;

import ReactLoading from "react-loading";

const LoaderPages = () => {
  return (
    <div className="fixed z-50 duration-500 -top-6 right-0 left-0 bottom-0 flex justify-center items-center bg-gray-900/60">
      <div className="bg-white py-20 px-14 rounded-2xl">
        <ReactLoading type="bars" color="#0080FF" height={70} width={70} />
      </div>
    </div>
  );
};

export default LoaderPages;

// ** Import Components
import Sidebar from "../components/sidebar/Sidebar";

// ** Import Other
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <div className="flex overflow-hidden">
      <div className="bg-white h-full w-[20rem] px-9">
        <Sidebar />
      </div>

      <div className="bg-[#F5F6F8] flex-1 py-5 px-10">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutDashboard;

// ** Import Components
import Sidebar from "../components/sidebar/Sidebar";

// ** Import Css
import "./styleLayoutDashboard.css";

// ** Import Other
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  return (
    <div className="flex relative">
      <div className="bg-white w-[20rem]">
        <div className="fixed h-full w-[315px] overflow-y-auto no-scrollbar">
          <Sidebar />
        </div>
      </div>

      <div className="bg-[#F5F6F8] min-h-[100vh] flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutDashboard;

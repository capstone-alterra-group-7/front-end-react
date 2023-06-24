// ** Import Components
import { useSelector } from "react-redux";
import Sidebar from "../components/sidebar/Sidebar";

// ** Import Css
import "./styleLayoutDashboard.css";

// ** Import Other
import { Outlet } from "react-router-dom";

const LayoutDashboard = () => {
  const { logout } = useSelector((state) => state.tokenAuth);

  return (
    <div className="flex relative">
      <div className="bg-white w-[18rem] border-r border-[#EBEDF1]">
        <div className="fixed h-full w-[295px] overflow-y-auto no-scrollbar">
          <Sidebar />
        </div>
      </div>

      <div
        className={`bg-[#F5F6F8] min-h-[100vh] flex-1 ${logout && "-z-50"} `}
      >
        <Outlet />
      </div>
    </div>
  );
};

export default LayoutDashboard;

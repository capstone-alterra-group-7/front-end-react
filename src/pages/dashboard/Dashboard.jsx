import React from "react";

// ** Import Components
import SuccessLogin from "../../components/auth/SuccessLogin";

// ** Import Redux
import { useSelector } from "react-redux";

const Dashboard = () => {
  // ** Redux State
  const isLogin = useSelector((state) => state.tokenAuth.isLogin);

  if (isLogin) {
    return <SuccessLogin />;
  }

  return <div>Dashboard</div>;
};

export default Dashboard;

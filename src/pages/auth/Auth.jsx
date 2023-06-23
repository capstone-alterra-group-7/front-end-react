// ** Import Components
import CardAuth from "../../components/auth/CardAuth";
import TitlePage from "../../globals/TitlePage";

// ** Import Assets
import assets from "../../assets/assets";

// ** Import Other
import { Navigate } from "react-router-dom";

const Auth = () => {
  const token = sessionStorage.getItem("token");

  if (token) {
    return <Navigate to="/dashboard" />;
  }

  const style = {
    backgroundImage: `url(${assets.backgroundLogin})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "absolute",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      <TitlePage title="Login" />

      {/* Hero Section */}
      <div className="h-screen">
        <div style={style} className="brightness-50"></div>
        <CardAuth />
      </div>
    </>
  );
};

export default Auth;

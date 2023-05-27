import React from "react";
import CardAuth from "../../components/auth/CardAuth";
import assets from "../../assets/assets";

const Auth = () => {
  const style = {
    "background-image": `url(${assets.backgroundLogin})`,
    "background-repeat": "no-repeat",
    "background-size": "cover",
    position: "absolute",
    height: "100%",
    width: "100%",
  };
  return (
    <>
      {/* Hero Section */}
      <div className="h-screen">
        <div style={style} className="brightness-50"></div>
        <CardAuth />
      </div>
    </>
  );
};

export default Auth;

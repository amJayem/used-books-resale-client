import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="bg-indigo-50">
      <Navbar />
      <div className="">
        <Outlet />
      </div>
      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
};

export default Main;

import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import UserCheckUp from "../Pages/Shared/UserCheckUp";

const Main = () => {
  return (
    <div className="">
      <Navbar />
      <UserCheckUp/>      
      <div className="">
        <Outlet />
      </div>
      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default Main;

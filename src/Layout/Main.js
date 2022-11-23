import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="md:mx-20 mx-5">
      <Navbar />
      <div className="mx-6">
        <Outlet />
      </div>
      <div className="-mx-4">
        <Footer />
      </div>
    </div>
  );
};

export default Main;

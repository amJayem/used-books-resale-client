import React from "react";
import Navbar from "../Pages/Shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div className="md:mx-20 mx-5">
      <Navbar />
      <div className="mx-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Main;

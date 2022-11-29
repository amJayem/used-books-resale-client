import React, { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import useRole from "../Hooks/useRole";
import DashboardNav from "../Pages/Dashboard/DashboardNav";
import Loader from "../Pages/Shared/Loader/Loader";

const DashBoard = () => {
  const { user } = useContext(AuthContext);
  console.log();
  const [role, isLoading] = useRole(user?.email);

  if (isLoading) {
    return Loader();
  }
  return (
    <div>
      <DashboardNav />
      <div className="drawer drawer-mobile">
        <input id="dashboard" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col lg:items-start sm:items-stretch md:items-center">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 bg-base-100 text-base-content">
            {/* <!-- Sidebar content here --> */}
            <li>
              {role === "buyer" && (
                <>
                  <Link to="/dashboard/buyer">My Orders</Link>
                </>
              )}
              {role === "seller" && (
                <>
                  <Link to="/dashboard/add-book">Add Book</Link>
                  <Link to="/dashboard/my-products">My products</Link>
                </>
              )}
              {role === "admin" && (
                <>
                  <Link to="/dashboard/admin/all-seller">All Seller</Link>
                  <Link to="/dashboard/admin/all-buyer">All Buyer</Link>
                  <Link to="/dashboard/admin/reported-items">Reported Items</Link>
                </>
              )}
            </li>
          </ul>
        </div>
      </div>
      {/* <SellerDashboard/> */}
    </div>
  );
};

export default DashBoard;

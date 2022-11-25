import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Layout/DashBoard";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Categories from "../Pages/Categories/Categories";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard";
import BuyerDashboard from "../Pages/Dashboard/BuyerDashboard";
import SellerDashboard from "../Pages/Dashboard/SellerDashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login-Signup/Login";
import Signup from "../Pages/Login-Signup/Signup";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/blog",
        element: <Blogs />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashBoard />,
    children: [
      {
        path: "/dashboard/buyer",
        element: <BuyerDashboard />,
      },
      {
        path: "/dashboard/seller",
        element: <SellerDashboard />,
      },
      {
        path: "/dashboard/admin",
        element: <AdminDashboard />,
      },
    ],
  },
]);

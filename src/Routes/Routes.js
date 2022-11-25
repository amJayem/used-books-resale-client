import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Layout/DashBoard";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Categories from "../Pages/Categories/Categories";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import BuyerDashboard from "../Pages/Dashboard/BuyerDashboard/BuyerDashboard";
import MyProducts from "../Pages/Dashboard/SellerDashboard/MyProducts";
import SellerDashboard from "../Pages/Dashboard/SellerDashboard/SellerDashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login-Signup/Login";
import Signup from "../Pages/Login-Signup/Signup";
import PrivateRoute from "./PrivateRoute";

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
    element: <PrivateRoute>
      <DashBoard />
      </PrivateRoute>,
    children: [
      {
        path: "/dashboard/buyer",
        element: <BuyerDashboard />,
      },
      {
        path: "/dashboard/add-book",
        element: <SellerDashboard />,
      },
      {
        path: "/dashboard/my-products",
        element: <MyProducts />,
      },
      {
        path: "/dashboard/admin",
        element: <AdminDashboard />,
      },
    ],
  },
]);

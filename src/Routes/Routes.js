import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Layout/DashBoard";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Categories from "../Pages/Categories/Categories";
import CategoriesById from "../Pages/Categories/CategoriesById";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import BookNow from "../Pages/Dashboard/BuyerDashboard/BookNow";
import BuyerDashboard from "../Pages/Dashboard/BuyerDashboard/BuyerDashboard";
import Payment from "../Pages/Dashboard/BuyerDashboard/Payment";
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
      {
        path: "/category/:id",
        element: <CategoriesById />,
        loader: ({params})=>fetch(`http://localhost:5000/category/${params.id}`)
      },
      {
        path: '/book-now/:id',
        element: <BookNow/>
      }
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
        path: "/dashboard/buyer/payment/:id",
        element: <Payment />,
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

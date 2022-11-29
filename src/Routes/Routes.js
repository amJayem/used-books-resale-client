import { createBrowserRouter } from "react-router-dom";
import DashBoard from "../Layout/DashBoard";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Categories from "../Pages/Categories/Categories";
import CategoriesById from "../Pages/Categories/CategoriesById";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard/AdminDashboard";
import AllBuyer from "../Pages/Dashboard/AdminDashboard/AllBuyer";
import AllSeller from "../Pages/Dashboard/AdminDashboard/AllSeller";
import ReportedItems from "../Pages/Dashboard/AdminDashboard/ReportedItems";
import BookNow from "../Pages/Dashboard/BuyerDashboard/BookNow";
import BuyerDashboard from "../Pages/Dashboard/BuyerDashboard/BuyerDashboard";
import Payment from "../Pages/Dashboard/BuyerDashboard/Payment";
import MyProducts from "../Pages/Dashboard/SellerDashboard/MyProducts";
import SellerDashboard from "../Pages/Dashboard/SellerDashboard/SellerDashboard";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login-Signup/Login";
import Signup from "../Pages/Login-Signup/Signup";
import ErrorPage from "../Pages/Shared/Error/ErrorPage";
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
        element: (
          <PrivateRoute>
            <CategoriesById />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`https://12-book-shop-server.vercel.app/category/${params.id}`),
      },
      {
        path: "/book-now/:id",
        element: <BookNow />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashBoard />
      </PrivateRoute>
    ),
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
      {
        path: "/dashboard/admin/all-seller",
        element: <AllSeller />,
      },
      {
        path: "/dashboard/admin/all-buyer",
        element: <AllBuyer />,
        // loader: ({params}) => fetch(`https://12-book-shop-server.vercel.app/all-buyers`)
      },
      {
        path: "/dashboard/admin/reported-items",
        element: <ReportedItems />,
      },
      {
        path: "*",
        element: <ErrorPage />,
      },
    ],
  },
]);

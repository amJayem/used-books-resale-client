import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Blogs from "../Pages/Blogs/Blogs";
import Categories from "../Pages/Categories/Categories";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login-Signup/Login";
import Signup from "../Pages/Login-Signup/Signup";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/categories',
                element: <Categories/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/signup',
                element: <Signup/>
            },
            {
                path: '/blog',
                element: <Blogs/>
            }
        ]
    }
])
import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const { user, SignOutUser } = useContext(AuthContext);
  
  const { data: categories } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("https://12-book-shop-server.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });

  const handleSignOut = () =>{
    SignOutUser()
    .then()
    .catch(e=>console.error('sign out error => ', e))
  }

  const navItems = (
    <>
      <li>
        <Link
          to="/"
          className="btn btn-secondary  btn-outline  rounded-lg m-1 "
        >
          Home
        </Link>
      </li>
      <li tabIndex={0}>
        <Link to='/categories' className=" btn btn-secondary  btn-outline  rounded-lg m-1 ">
          Categories
        </Link>
        <ul className="px-2 bg-white">
          <li>
            {
              categories?.map((ctg, i)=>
                <Link key={i} to={`/category/${ctg.categoryId}`} className="btn btn-secondary  btn-outline  rounded-lg m-1 ">
              {ctg.category}
            </Link>)
            }
          </li>
        </ul>
      </li>
      <li>
        <Link
          to="/dashboard"
          className="btn btn-secondary  btn-outline  rounded-lg m-1 "
        >
          Dashboard
        </Link>
        <Link
          to="/blog"
          className="btn btn-secondary  btn-outline  rounded-lg m-1 "
        >
          Blog
        </Link>

        {user?.email ? (
          <Link onClick={handleSignOut} className="btn  btn-primary text-white rounded-lg m-1 ">
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn btn-secondary  text-white rounded-lg m-1 "
          >
            Login
          </Link>
        )}
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          <span className="font-bold text-4xl text-secondary">Book</span>
          <span className="font-bold text-4xl text-primary">Store</span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal p-0">{navItems}</ul>
      </div>
    </div>
  );
};

export default Navbar;

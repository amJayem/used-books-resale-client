import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const Navbar = () => {
  const { user, SignOutUser } = useContext(AuthContext);

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
          className="btn btn-outline bg-secondary text-white rounded-lg"
        >
          Home
        </Link>
      </li>
      <li tabIndex={0}>
        <Link className=" btn btn-outline bg-secondary text-white">
          Categories
        </Link>
        <ul className="p-2 bg-white">
          <li>
            <Link className="btn btn-outline bg-secondary text-white rounded-lg">
              Submenu 1
            </Link>

            <Link className="btn btn-outline bg-secondary text-white rounded-lg">
              Submenu 2
            </Link>
          </li>
        </ul>
      </li>
      <li>
        <Link
          to="/blog"
          className="btn btn-outline bg-secondary text-white rounded-lg"
        >
          Blog
        </Link>

        {user?.email ? (
          <Link onClick={handleSignOut} className="btn btn-outline bg-error text-white rounded-lg">
            Logout
          </Link>
        ) : (
          <Link
            to="/login"
            className="btn btn-outline bg-primary text-white rounded-lg"
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
      <div className="navbar-end">
        <button className="btn btn-ghost btn-circle">
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
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-ghost btn-circle">
          <div className="indicator">
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
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            <span className="badge badge-xs badge-primary indicator-item"></span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Navbar;

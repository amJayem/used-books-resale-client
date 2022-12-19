import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{ backgroundImage: `url("https://www.maxpixel.net/static/photo/1x/Bookstore-Reader-Writer-Books-Book-Reading-Read-1204029.jpg")` }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Sell or Buy Books</h1>
          <p className="mb-5">
          Places to Sell Used Books and free up your self storage
          </p>
          <Link to='/categories' className="btn btn-primary text-white">Get Started</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;

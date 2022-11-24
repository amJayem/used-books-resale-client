import React from "react";

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
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

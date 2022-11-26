import React from "react";
import { Link } from "react-router-dom";

const CategoryItemCard = ({ ctg }) => {
  const { category, categoryId } = ctg;
  return (
    <div>
      <Link to={`/category/${categoryId}`}>
        <div className="card w-96 bg-base-100 shadow-xl image-full m-5">
          <figure>
            <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title mb-10 uppercase text-white">{category}</h2>
            <div className="card-actions justify-start">
              <button className="text-white btn btn-primary">See available books</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItemCard;

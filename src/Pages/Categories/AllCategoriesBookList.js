import React from "react";
import { Link } from "react-router-dom";

const AllCategoriesBookList = ({ cat }) => {
  const {
    book,
    author,
    price,
    description,
    condition,
    image,
    location,
    phone,
    status,
    _id,
  } = cat;

  return (
    <div>
      <div className="card card-compact w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book}</h2>
          <p>
            <span className="font-semibold">Author: </span>
            {author}
          </p>
          <p>
            <span className="font-semibold">Descp:</span>
            {description}
          </p>
          <p>
            <span className="font-semibold">Price: ${price}</span>
          </p>
          <p>
            <span className="font-semibold">Location: {location}</span>
          </p>
          <p>
            <span className="font-semibold">Contact info: </span>
            {phone}
          </p>
          <p>
            <span className="font-semibold">Condition: </span>
            {condition}
          </p>
          <p>
            {
              status === 'sold' ?
              <span className="text-error font-semibold">
                Status: {status}
              </span>
              :
              <span className="font-semibold text-success">
                Status: {status}
              </span>
            }
          </p>
          <div className="card-actions justify-end">
            {status === "sold" ? (
              <Link className="btn" disabled>
                Book Now
              </Link>
            ) : (
              <Link to={`/book-now/${_id}`} className="btn btn-primary">
                Book Now
              </Link>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesBookList;

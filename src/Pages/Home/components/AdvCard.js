import React from "react";
import { Link } from "react-router-dom";

const AdvCard = ({ adBook }) => {
  const { image, advertise, book, price, status, _id } = adBook;
  return (
    <div>
      {status === "available" && advertise === true && (
        <div className="my-5 card card-compact w-96  bg-base-100 shadow-xl h-full">
          <figure className="p-2">
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{book}</h2>
            <p>${price}</p>
            <div className="card-actions justify-end">
              <Link to={`/book-now/${_id}`} className=" btn btn-primary">
                Book Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvCard;

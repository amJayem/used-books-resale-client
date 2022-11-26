import React from "react";

const AdvCard = ({ adBook }) => {
  const { image, advertise, book, price, status, description } = adBook;
  return (
    <div>
      {status === "available" && advertise === true && (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{book}</h2>
            <p>{description}</p>
            <p>${price}</p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-white">Buy Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvCard;

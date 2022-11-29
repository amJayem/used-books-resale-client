import React from "react";

const AdvCard = ({ adBook }) => {
  const { image, advertise, book, price, status } = adBook;
  return (
    <div>
      {status === "available" && advertise === true && (
        <div className="my-5 card card-compact w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{book}</h2>
            <p>${price}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvCard;

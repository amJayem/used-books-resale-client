import React from "react";

const AdvCard = ({ adBook, setBookInfo }) => {
  const { image, advertise, book, price, status, author } = adBook;
  return (
    <div>
      {status === "available" && advertise === true && (
        <div className="my-5 card card-compact w-96  bg-base-100 shadow-xl h-full">
          <figure className="p-2">
            <img src={image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{book}</h2>
            <p>{author}</p>
            <p>${price}</p>
            <div className="card-actions justify-end">
              <label
                onClick={() => setBookInfo(adBook)}
                htmlFor="booking-modal"
                className="btn btn-primary text-white"
                disabled={status === "sold"}
              >
                book now
              </label>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdvCard;

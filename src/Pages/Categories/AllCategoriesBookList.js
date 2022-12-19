import React from "react";

const AllCategoriesBookList = ({ bookDetails, setBookInfo }) => {
  const {
    book,
    author,
    price,
    description,
    condition,
    years,
    image,
    location,
    phone,
    status,
  } = bookDetails;

  const originalPrice = parseInt(price) + 100;

  return (
    <div className="my-5">
      <div className="card card-compact w-80   bg-base-100 shadow-xl h-full">
        <figure className=" bg-indigo-200 p-2">
          <img className="w-52 h-80 rounded-lg" src={image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{book}</h2>
          <p>
            <span className="font-semibold">Author: </span>
            {author}
          </p>
          <p>
            <span className="font-semibold">Description:</span>
            {description}
          </p>
          <p>
            <span className="font-semibold">Resale Price: BDT {price}</span> <br />
            <span>Original Price: BDT {originalPrice}</span>
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
          {bookDetails.years && (
            <p>
              <span className="font-semibold">Buying years: </span>
              {years}
            </p>
          )}
          <p>
            {status === "sold" ? (
              <span className="text-error font-semibold">Status: {status}</span>
            ) : (
              <span className="font-semibold text-success">
                Status: {status}
              </span>
            )}
          </p>
          <div className="card-actions justify-end">
            <label
              onClick={() => setBookInfo(bookDetails)}
              htmlFor="booking-modal"
              className="btn btn-primary text-white"
              disabled={status === "sold" }
            >
              book now
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCategoriesBookList;

import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";

const BookingModal = ({ bookInfo }) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
//   console.log(user);
//   console.log(treatment);
  const { addedBy, author, location, status, book, description, phone, price, _id } =
    bookInfo;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const buyerEmail = form.buyerEmail.value;
    const buyerPhone = form.buyerPhone.value;
    const buyerLocation = form.buyerLocation.value;

    const bookingInfo = {
      author,
      book,
      buyerEmail,
      buyerPhone,
      buyerLocation,
      sellerEmail: addedBy,
      sellerLocation: location,
      status,
      description,
      sellerPhone: phone,
      resalePrice: price,
      bookPostingId: _id
    };
    console.log(bookingInfo);

    fetch(`https://12-book-shop-server.vercel.app/buyer-orders`, {
      method: "post",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(bookingInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          navigate("/dashboard/buyer");
          toast.success("This item is booked");
        }
      })
      .catch((e) => {
        console.error("booking error => ", e);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box ">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-xl">{book}</h3>
          <span>Author: {author}</span>
          <p>Resale Price: <span className="font-bold">BDT {price}</span></p>
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              name="buyerEmail"
              value={`${user?.email}`}
              disabled
              className="input input-bordered"
            />
            <input
              type="tel"
              name="buyerPhone"
              placeholder="your phone number"
              className="input input-bordered"
              required
            />
            <input
              type="text"
              name="buyerLocation"
              placeholder="your location"
              className="input input-bordered"
            />
            <input
              type="submit"
              value="submit"
              className="btn btn-secondary text-white"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;

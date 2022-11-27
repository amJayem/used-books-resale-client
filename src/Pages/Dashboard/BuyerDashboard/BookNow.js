import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";

const BookNow = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()
  const bookId = useParams();
  const id = bookId.id;
  // console.log(bookId.id);

  const { data: books, isLoading } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/book/${id}`);
      const data = await res.json();

      return data;
    },
  });

//   console.log(books);

  const handleBooking = (e) =>{
    e.preventDefault();
    const form = e.target;
    const buyer = form.buyer.value;
    const buyerEmail = form.buyerEmail.value;
    const book = form.book.value;
    const price = form.price.value;
    const sellerPhone = form.sellerPhone.value;
    const buyerPhone = form.buyerPhone.value;
    const sellerLoc = form.sellerLoc.value;
    const buyerLoc = form.buyerLoc.value;
    const image = books.image;

    const bookInfo = {
        buyer, buyerEmail, book, price, sellerPhone,
        buyerPhone, sellerLoc, buyerLoc, image,
        status: books.status,
        categoryId: books.categoryId,
        sellerEmail: books.addedBy,
    }

    // console.log(bookInfo);

    fetch(`http://localhost:5000/buyer-orders`,{
        method: 'post',
        headers: { 'content-type': 'application/json'},
        body: JSON.stringify(bookInfo)
    })
    .then(res=>res.json())
    .then(data=>{
        // console.log(data);
        if(data.acknowledged){
            navigate('/dashboard/buyer');
            toast.success("This item is booked");
        }
    })
    .catch(e=>{
        console.error('booking error => ',e);
    })
  }

  if (isLoading) {
    return Loader();
  }

  return (
    <div>
      <form onSubmit={handleBooking} className="grid grid-cols-1 justify-items-center">
        <h1> Book Now!</h1>
        <div className="w-72">
            <img className="rounded-lg shadow-lg my-5" src={books?.image} alt="" />
        </div>
        <div>
          <label className="label">
            <span className="label-text-alt">Buyer Name</span>
          </label>
          <input
            type="text"
            name="buyer"
            disabled
            defaultValue={user?.displayName}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text-alt">Buyer email</span>
          </label>
          <input
            type="text"
            name="buyerEmail"
            disabled
            defaultValue={user?.email}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text-alt">Book</span>
          </label>
          <input
            type="text"
            name="book"
            disabled
            defaultValue={books?.book}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text-alt">Price $</span>
          </label>
          <input
            type="text"
            name="price"
            disabled
            defaultValue={books?.price}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text-alt">Seller Phone</span>
          </label>
          <input
            type="text"
            name="sellerPhone"
            disabled
            defaultValue={books?.phone}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text-alt">Your Phone No</span>
          </label>
          <input
            type="text"
            name="buyerPhone"
            placeholder="Type your phone no"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text-alt">Seller Location</span>
          </label>
          <input
            type="text"
            name="sellerLoc"
            disabled
            defaultValue={books?.location}
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text-alt">Meet Location</span>
          </label>
          {
            <input
            type="text"
            name="buyerLoc"
            placeholder="Where do you want to meet"
            className="input input-bordered w-full"
          />}
        </div>
        <input
            type="submit"
            className="btn btn-secondary text-white my-5 w-full max-w-xs"
          />
      </form>
    </div>
  );
};

export default BookNow;
import React, { useState, useContext } from "react";
import { toast } from "react-hot-toast";
import axios from "axios";
import { AuthContext } from "../../../Context/AuthProvider";
import { useNavigate } from 'react-router-dom';

const SellerDashboard = () => {
  const [error, setError] = useState("");
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const conditions = ["Excellent", "Good", "Fair"];
  const imgHostingKey = process.env.REACT_APP_IMGBB_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;

    const image = form.image.files[0];

    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imgHostingKey}`;

    // image hosting to imgbb
    fetch(url, {
      method: "post",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          // console.log(data.data.display_url);
          const image = data.data.display_url;

          axios
            .post(`https://12-book-shop-server.vercel.app/books`, {
              book: form.book.value,
              author: form.author.value,
              price: form.price.value,
              condition: form.condition.value,
              years: form.years.value,
              phone: form.phone.value,
              location: form.location.value,
              description: form.description.value,
              categoryId: form.category.value,
              image: image,
              addedBy: user?.email,
              status: 'available',
              advertise: false,
            })
            .then((result) => {
              if (result.data.acknowledged) {
                toast.success("Book added");
                navigate('/dashboard/my-products')
              }
            //   console.log(result);
            })
            .catch((e) => {
              setError(e.message);
              console.error("storing to DB error => ", e);
            });
        }
      })
      .catch((e) => {
        setError(e.message);
        console.error("book image upload error => ", e);
      });
    setError("");
  };

  return (
    <div className="my-5">
      <div>
        <h1 className="text-4xl font-semibold my-5">Add a Book</h1>
      </div>
      <form onSubmit={handleSubmit} className="my-5">
        <div>
          <label className="label">
            <span className="label-text">Book Name</span>
          </label>
          <input
            type="text"
            name="book"
            placeholder="Book Title"
            className="input input-bordered w-80"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Author Name</span>
          </label>
          <input
            type="text"
            name="author"
            placeholder="Author name"
            className="input input-bordered w-80"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input
            type="text"
            name="price"
            placeholder="Type here"
            className="input input-bordered w-80"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Condition Type</span>
          </label>
          <select
            className="select select-bordered w-full max-w-xs"
            name="condition"
          >
            {conditions.map((condition, i) => (
              <option key={i} value={condition}>
                {condition}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="label">
            <span className="label-text">Buying years</span>
          </label>
          <input
            type="text"
            name="years"
            placeholder="Your phone no"
            className="input input-bordered w-80"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Contact No.</span>
          </label>
          <input
            type="text"
            name="phone"
            placeholder="Your phone no"
            className="input input-bordered w-80"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Location</span>
          </label>
          <input
            type="text"
            name="location"
            placeholder="Your location"
            className="input input-bordered w-80"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input
            type="text"
            name="description"
            placeholder="Short description"
            className="input input-bordered w-80"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Category</span>
          </label>
          <input
            type="text"
            name="category"
            placeholder="1 2 3 ..."
            className="input input-bordered w-80"
          />
        </div>
        <div>
          <label className="label">
            <span className="label-text">Book Image</span>
          </label>
          <input type="file" name="image" className="input" />
        </div>
        {error && <p className="text-error">{error}</p>}
        <div className="my-5">
          <input type="submit" className="btn btn-secondary w-80 text-white" />
        </div>
      </form>
    </div>
  );
};

export default SellerDashboard;

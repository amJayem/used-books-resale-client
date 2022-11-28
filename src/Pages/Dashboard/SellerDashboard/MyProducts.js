import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
import axios from "axios";
import toast from "react-hot-toast";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  // book list are displaying by seller email
  const {
    data: myProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `https://12-book-shop-server.vercel.app/books?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return Loader();
  }

  // seller can delete their product
  const handleDelete = (id) => {
    axios
      .delete(`https://12-book-shop-server.vercel.app/books/${id}`)
      .then((result) => {
        // console.log(result);
        toast.success("Delete Success");
        refetch();
      })
      .catch((e) => {
        console.error("delete error => ", e);
      });
  };

  // seller can update product status
  const handleStatus = (id, status) => {
    if (status === "available") status = "sold";
    else status = "available";
    // console.log(id, status);

    axios
      .patch(`https://12-book-shop-server.vercel.app/book/status/${id}`, { status })
      .then((res) => {
        // console.log(res);
        if (res.data.acknowledged) {
          toast.success("status updated");
        }
        refetch();
      })
      .catch((e) => {
        console.error("status error => ", e);
      });
  };
  
  //seller can add product for advertise
  const handleAddAdvertise = (id) =>{
    axios
      .patch(`https://12-book-shop-server.vercel.app/book/feature/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged) {
          toast.success("Added for advertise");
        }
        refetch();
      })
      .catch((e) => {
        console.error("advertise error => ", e);
      });
  }

  //seller can remove product from advertise
  const handleRemoveAdvertise = (id) =>{
    axios
      .patch(`https://12-book-shop-server.vercel.app/book/feature/remove/${id}`)
      .then((res) => {
        console.log(res);
        if (res.data.acknowledged) {
          toast.success("Advertise removed");
        }
        refetch();
      })
      .catch((e) => {
        console.error("advertise error => ", e);
      });
  }

  return (
    <div>
      <div>
        <h1 className="text-4xl font-semibold my-5">MyProducts</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Book Name</th>
              <th>Author</th>
              <th>category</th>
              <th>Sales Status?</th>
              <th>Advertise</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {myProducts?.map((myProduct, i) => (
              <tr key={i}>
                <th>{i + 1}</th>
                <th>
                  <div className="avatar">
                    <div className="w-24 rounded">
                      <img src={myProduct.image} alt="" />
                    </div>
                  </div>
                </th>
                <td>
                  <p>{myProduct.book}</p>
                  <p>${myProduct.price}</p>
                  {myProduct.status === "available" && (
                    <p className="text-success">{myProduct.status}</p>
                  )}
                  {myProduct.status === "sold" && <p className="text-error">out of stock</p>}
                </td>
                <td>{myProduct.author}</td>
                <td>{myProduct.categoryId}</td>
                <td>
                  {myProduct.status !== "available" && (
                    <button
                      className="btn btn-success my-1 text-white w-full"
                      onClick={() =>
                        handleStatus(myProduct._id, myProduct.status)
                      }
                      value="available"
                    >
                      Make Available
                    </button>
                  )}
                  {myProduct.status !== "sold" && (
                    <button
                      className="btn btn-error w-full my-1 text-white"
                      onClick={() =>
                        handleStatus(myProduct._id, myProduct.status)
                      }
                      value="sold"
                    >
                      Sold out
                    </button>
                  )}
                </td>
                <td>
                    {myProduct.status === 'sold' && <>
                    <button className="btn mr-1" disabled>Add</button>
                    <button className="btn " disabled>Remove</button>
                    </>}

                  {myProduct.status === 'available' &&
                  <>
                  
                  {myProduct.advertise === false ? <button onClick={()=>handleAddAdvertise(myProduct._id)} className="btn btn-secondary mr-1 text-white">
                    Add
                  </button>
                  :
                  <button className="btn mr-1" disabled>Add</button>}

                  {myProduct.advertise === true ? <button onClick={()=>handleRemoveAdvertise(myProduct._id)} className="btn btn-primary text-white">Remove</button>
                  :
                  <button className="btn mr-1" disabled>Remove</button>}
                  </>}
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(myProduct._id)}
                    className="btn bg-red-600 text-white border-none"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyProducts;

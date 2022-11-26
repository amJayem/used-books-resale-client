import React, { useContext } from "react";
import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../Context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
import axios from "axios";
import toast from "react-hot-toast";

const MyProducts = () => {
  const { user } = useContext(AuthContext);

  const {
    data: myProducts,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["products"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/books?email=${user?.email}`
      );
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return Loader();
  }

  //   console.log(myProducts);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5000/books/${id}`)
      .then((result) => {
        // console.log(result);
        toast.success("Delete Success");
        refetch();
      })
      .catch((e) => {
        console.error("delete error => ", e);
      });
  };

  const handleStatus = (id, status) => {
    if (status === "available") status = "sold";
    else status = "available";
    console.log(id, status);

    axios
      .patch(`http://localhost:5000/book/status/${id}`, { status })
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
                <td>{myProduct.book}</td>
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
                    Make  Available
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
                    <button className="btn btn-secondary mr-1 text-white">Add</button>
                    <button className="btn btn-primary text-white">Remove</button>
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

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

  if(isLoading){
    return Loader();
  }

  const handleDelete = id =>{
    axios.delete(`http://localhost:5000/books/${id}`)
    .then(result => {
        // console.log(result);
        toast.success("Delete Success")
        refetch();
    })
    .catch(e =>{
        console.error('delete error => ',e);
    })
  }

  return (
    <div>
      MyProducts
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th>Book Name</th>
              <th>Author</th>
              <th>category</th>
              <th>Sales Status</th>
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
                      <img src={myProduct.image} alt=''/>
                    </div>
                  </div>
                </th>
                <td>{myProduct.book}</td>
                <td>{myProduct.author}</td>
                <td>{myProduct.categoryId}</td>
                <td>
                  <select name="status" id="">
                    <option value="available">Available</option>
                    <option value="sold">Sold</option>
                  </select>
                </td>
                <td>
                  <button onClick={()=>handleDelete(myProduct._id)} className="btn bg-red-600 text-white border-none">
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

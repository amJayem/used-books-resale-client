import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";

const AllBuyer = () => {

  const { data: allBuyers, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`https://12-book-shop-server.vercel.app/all-buyers`);
      const data = await res.json();

      return data;
    },
  });
  // console.log('allBuyers: ',allBuyers);

  const handleDeleteUser = (id) => {

    const confirm = window.confirm("Do you want to delete buyer");
    if (confirm) {
      axios
        .delete(`https://12-book-shop-server.vercel.app/delete/user/${id}`)
        .then((data) => {
          // console.log(data);
          if (data.data.status === 200) {
            refetch();
            toast.success("Buyer deleted");
          }
        })
        .catch((e) => {
          console.error("Delete buyer error => ", e);
        });
    }
  };

  return (
    <div>
      <div>
        <div>
          <h1 className="text-4xl font-semibold my-5">All Buyers</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table  w-full">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allBuyers?.map((allBuyer, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <th>
                    <div className="avatar">
                      <div className="w-24 rounded-full">
                        <img src={allBuyer.image} alt="buyer img" />
                      </div>
                    </div>
                  </th>
                  <td>{allBuyer.name}</td>
                  <th>{allBuyer.email}</th>
                  <td>
                    <button
                      onClick={() => handleDeleteUser(allBuyer._id)}
                      className="btn btn-primary text-white"
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
    </div>
  );
};

export default AllBuyer;

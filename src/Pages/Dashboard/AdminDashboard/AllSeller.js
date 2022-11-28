import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

const AllSeller = () => {
  const { data: allSellers, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/all-sellers`);
      const data = await res.json();

      return data;
    },
  });
  // console.log("allSeller : ", allSellers);

  const handleDeleteSeller = (id) => {
    const confirm = window.confirm("Do you want to delete buyer");
    if (confirm) {
      axios
        .delete(`http://localhost:5000/delete/user/${id}`)
        .then((data) => {
          // console.log(data);
          if (data.data.status === 200) {
            refetch();
            toast.success("Seller deleted");
          }
        })
        .catch((e) => {
          console.error("Delete seller error => ", e);
        });
    }
  };

  const handleVerify = (id) => {
    const status = 0;
    axios
      .patch(`http://localhost:5000/seller/status/${id}`, { status })
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
        <div>
          <h1 className="text-4xl font-semibold my-5">All Sellers</h1>
        </div>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allSellers?.map((allSeller, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td>{allSeller.name}</td>
                  <td>{allSeller.email}</td>
                  <td>
                    {allSeller.status !== "verified" ? (
                      <Link
                        onClick={() => handleVerify(allSeller._id)}
                        className="btn btn-success text-white"
                      >
                        Verify
                      </Link>
                    ) : (
                      <Link
                        className="btn btn-success text-white"
                      >
                        verified
                      </Link>
                    )}

                    <Link
                      onClick={() => handleDeleteSeller(allSeller._id)}
                      className="btn btn-error ml-1 text-white"
                    >
                      Delete
                    </Link>
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

export default AllSeller;

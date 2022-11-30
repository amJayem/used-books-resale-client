import { useQuery } from "@tanstack/react-query";
import React from "react";
// import axios from "axios";
// import toast from "react-hot-toast";

const ReportedItems = () => {
  const { data: reportedItems } = useQuery({
    queryKey: ["report"],
    queryFn: async () => {
      const res = await fetch(`https://12-book-shop-server.vercel.app/reported-items`);
      const data = await res.json();

      return data;
    },
  });
  console.log(reportedItems);

  // const handleVerify = (id) => {
  //     const status = 0;
  //     axios
  //     //   .patch(`https://12-book-shop-server.vercel.app/seller/status/${id}`, { status })
  //       .patch(`https://localhost:5000/seller/status/${id}`, { status })
  //       .then((res) => {
  //         // console.log(res);
  //         if (res.data.acknowledged) {
  //           toast.success("status updated");
  //         }
  //         // refetch();
  //       })
  //       .catch((e) => {
  //         console.error("status error => ", e);
  //       });
  //   };

  return (
    <div>
      <h1 className="text-4xl my-5 font-semibold">Reported Items</h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th></th>
              <th>Book Name</th>
              <th>Seller email</th>
              <th>Buyer email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {reportedItems?.map((reportedItem,i) => (
              <tr key={i}>
                <th>{i+1}</th>
                <td>{reportedItem.book}</td>
                <td>{reportedItem.sellerEmail}</td>
                <td>{reportedItem.buyer}</td>
                <td>
                    <button className="btn btn-error text-white btn-sm">Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportedItems;

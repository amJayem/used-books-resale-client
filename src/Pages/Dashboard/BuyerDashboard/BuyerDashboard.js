import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../Context/AuthProvider";
import Loader from "../../Shared/Loader/Loader";
import {Link} from 'react-router-dom'

const BuyerDashboard = () => {
  const { user } = useContext(AuthContext);

  const { data: myOrders, isLoading } = useQuery({
    queryKey: ["order"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/buyer-orders?email=${user?.email}`
      );
      const data = await res.json();

      return data;
    },
  });

  //   console.log(orders);
  //   console.log(user);

  if (isLoading) {
    return Loader();
  }

  return (
    <div>
      <h1 className="text-4xl font-semibold my-5">
        My Orders: {myOrders?.length}
      </h1>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th></th>
                <th></th>
                <th>Book</th>
                <th>Price</th>
                <th>Seller Contact</th>
                <th>Payment status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {myOrders?.map((myOrder, i) => (
                <tr key={i}>
                  <th>{i + 1}</th>
                  <td className="w-56">
                    <img className="rounded-lg" src={myOrder.image} alt="" />
                  </td>
                  <td>{myOrder.book}</td>
                  <td>{myOrder.price}</td>
                  <td>
                    <p>{myOrder.sellerEmail}</p>
                    <p>{myOrder.sellerPhone}</p>
                  </td>
                  <td>
                    {
                      myOrder.payment === true ?
                      <Link to={`/dashboard/buyer/payment/${myOrder._id}`} className="btn btn-secondary btn-sm text-white">Pay</Link>
                      :
                      <Link className="btn btn-primary btn-sm text-white">Paid</Link>
                    }
                  </td>
                  <td>
                    <Link className="btn btn-primary btn-sm text-white">Cancel</Link>
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

export default BuyerDashboard;

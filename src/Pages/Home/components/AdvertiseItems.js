import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import BookingModal from "../../Dashboard/BuyerDashboard/BookingModal";
import AdvCard from "./AdvCard";

const AdvertiseItems = () => {
  const [bookInfo, setBookInfo] = useState(null);
  const { data: adBooks } = useQuery({
    queryKey: ["ad"],
    queryFn: async () => {
      const res = await fetch(`https://12-book-shop-server.vercel.app/feature/books`);
      const data = await res.json();
      return data;
    },
  });
  // console.log(adBooks);

  return (
    <div className="mx-0 my-6">
      <label className="label">
        <span className="label-text">Advertisement</span>
      </label>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 justify-items-center ">
        {adBooks?.map((adBook) => (
          <AdvCard key={adBook._id} adBook={adBook} setBookInfo={setBookInfo}></AdvCard>
        ))}
      </div>
      { bookInfo && 
        <BookingModal bookInfo={bookInfo}></BookingModal>}
    </div>
  );
};

export default AdvertiseItems;

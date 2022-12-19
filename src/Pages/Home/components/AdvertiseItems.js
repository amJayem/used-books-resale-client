import { useQuery } from "@tanstack/react-query";
import React from "react";
import AdvCard from "./AdvCard";

const AdvertiseItems = () => {
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center ">
        {adBooks?.map((adBook) => (
          <AdvCard key={adBook._id} adBook={adBook}></AdvCard>
        ))}
      </div>
    </div>
  );
};

export default AdvertiseItems;

import { useQuery } from "@tanstack/react-query";
import React from "react";
import Loader from "../../Shared/Loader/Loader";
import CategoryItemCard from "./CategoryItemCard";

const CategoryItem = () => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("https://12-book-shop-server.vercel.app/categories");
      const data = await res.json();
      return data;
    },
  });

  if(isLoading){
    return Loader()
  }

  //   console.log(object);
  return (
    <div className="my-16">
      <h1 className="grid justify-items-center text-4xl font-semibold">Categories</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-16">
        {categories?.map((ctg) => (
          <CategoryItemCard key={ctg._id} ctg={ctg}></CategoryItemCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;

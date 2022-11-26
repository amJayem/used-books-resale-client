import { useQuery } from "@tanstack/react-query";
import React from "react";
import CategoryItemCard from "./CategoryItemCard";

const CategoryItem = () => {
  const { data: categories } = useQuery({
    queryKey: ["category"],
    queryFn: async () => {
      const res = await fetch("http://localhost:5000/categories");
      const data = await res.json();
      return data;
    },
  });

  //   console.log(object);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-16">
        {categories?.map((ctg) => (
          <CategoryItemCard key={ctg._id} ctg={ctg}></CategoryItemCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryItem;

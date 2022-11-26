import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useLoaderData } from "react-router-dom";
import AllCategoriesBookList from "./AllCategoriesBookList";

const CategoriesById = () => {
  const ctg = useLoaderData();
  const { category, categoryId } = ctg;

  const { data: ctgId } = useQuery({
    queryKey: ["categoryQuery"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/books/categoryId?id=${categoryId}`
      );
      const data = await res.json();

      return data;
    },
  });

//   console.log(ctgId);

  return (
    <div>
      <div className="grid justify-items-center">
        <h1 className="text-4xl font-semibold">Category: '{category}'</h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center my-16 ">
        {ctgId?.map((cat,i) => (
          <AllCategoriesBookList
          key={i}
          cat={cat}
          ></AllCategoriesBookList>
        ))}
      </div>
    </div>
  );
};

export default CategoriesById;

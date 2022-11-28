import { useQuery } from "@tanstack/react-query";
import React, {  } from "react";
import { useLoaderData,  } from "react-router-dom";
import Loader from "../Shared/Loader/Loader";
import AllCategoriesBookList from "./AllCategoriesBookList";

const CategoriesById = () => {

    const {category, categoryId} = useLoaderData();

//   const categoryId = useParams();
//   console.log(categoryId);

  const { data: ctgId, refetch, isLoading } = useQuery({
    queryKey: ["categoryQuery"],
    queryFn: async () => {
      const res = await fetch(
        `https://12-book-shop-server.vercel.app/books/categoryId?id=${categoryId}`
      );
      const data = await res.json();
            
      return data;
    },
  });
  
  if(isLoading){
    return Loader();
  }
  refetch();

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

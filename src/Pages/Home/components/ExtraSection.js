import React from "react";

const ExtraSection = () => {
  const cardText = [
    "We give you an instant quote when you sell textbooks on BookDeal.",
    "We make it easy to find the highest offer.",
    "We ensure an easy selling process.",
    "We provide a wide network of reliable book-buying companies.",
    "We protect you with Upload Book Photos.",
    "We guarantee you'll get paid.",
  ];
  return (
    <div className="my-14">
      <div className="hero min-h-fit bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            // src="https://www.seekpng.com/png/detail/43-432559_stack-of-books-image-of-stack-books-clipart.png"
            alt=""
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold my-5">
              WHY SELL USED BOOKS ON BookShop?
            </h1>
            <ul>
              {
                cardText.map((text,i) =>
                    <li key={i} className="mb-2">
                        <span className="btn btn-accent mr-4 rounded-full text-white text-xl">{i+1}</span> 
                        <span className="text-xl sm:text-base font-semibold">{text}</span> 
                    </li>)
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;

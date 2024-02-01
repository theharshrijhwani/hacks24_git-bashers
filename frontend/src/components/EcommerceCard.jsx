import React from "react";

export default function EcommerceCard({ image_url, name, price, rating }) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="bg-white flex flex-col justify-center items-center shadow-2xl rounded-[12px] m-5 p-8 w-[30vw]">
        <div>
          <img
            src={image_url}
            alt=""
            width={250}
            // height={100}
            className="h-[250px] rounded-[15px]"
          />
        </div>
        <div className="flex flex-1 flex-col justify-center items-center">
          <p className="font-bold text-lg mt-5">{name}</p>
          <p className="font-bold text-2xl mt-1 mb-3">${price}</p>
          <p className="mt-1 mb-5">{rating}</p>
          <button className="bg-black text-white px-4 py-2 rounded-lg">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
}

import React from "react";

export default function EcommerceCard(  ) {
  return (
    <div>
     
        <div className="bg-white flex justify-around items-center shadow-2xl rounded-[12px] m-5 p-8 w-[700px]">
          <div>
            <img
              src="https://images.unsplash.com/photo-1523755231516-e43fd2e8dca5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fGhvbWUlMjB0YWJsZXxlbnwwfHwwfHx8MA%3D%3D"
              alt=""
              width={250}
              // height={100}
              className="h-[250px] rounded-[15px]"
            />
          </div>
          <div className="flex flex-1 ml-16 flex-col justify-center items-flex-start">
            <h1 className="font-bold text-3xl mt-5">Table</h1>
            <p className="mt-1 mb-5">Best Quality </p>
            <p className="font-bold text-2xl mt-1 mb-3">Rs.3000 </p>
            <div className="flex">
              <button className="bg-black text-white px-4 py-2 rounded-lg">
                Buy Now
              </button>
            </div>
          </div>
        </div>
    </div>
  );
}

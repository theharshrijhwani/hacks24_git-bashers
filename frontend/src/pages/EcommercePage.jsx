import React, { useState, useEffect } from "react";
import axios from "axios";
import EcommerceCard from "../components/EcommerceCard";

export default function EcommercePage() {
  const [items, setItems] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [dataLoaded, setDataLoaded] = useState(false);

  useEffect(() => {
    
  }, [items]);

  const handleSearch = () => {
    const input = document.getElementById("search");
    setSearchTerm(input.value);
    fetchData(input.value);
  };

  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:8000/scrape-amazon/${searchTerm}/1`
      );
      console.log(response.data.data)
      setItems(response.data.data);
      setDataLoaded(true);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <div className="flex flex-col items-center">
        <input
          placeholder="Search"
          type="text"
          id="search"
          className="w-[25vw] m-auto mt-5 p-3 outline-none border-black border-solid border-1"
        />
        <button onClick={handleSearch} className="bg-green">
          Search
        </button>
      </div>
      <div className="item-area flex flex-wrap gap-8">
        {dataLoaded ? (
          Array.isArray(items) && items.length > 0 ? (
            items.map((item) => (
              <EcommerceCard
                key={item.id}
                name={item.name}
                image_url={item.image_url}
                price={item.price}
                rating={item.rating}
              />
            ))
          ) : (
            <p>No items to display</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}

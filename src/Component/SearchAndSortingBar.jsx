import React, { useState, useEffect } from "react";
import "../App.css";
import Table from "./Table";

const SearchAndSoetingBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        );
        res.json().then((result) => {
          setData(result);
          setSortedData(result);
          console.dir(result);
        });
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <div id="container-main" className="w-full h-full">
      <div className="SearchAndSoetingBar flex justify-between items-center w-full h-[10%]">
        <input
          id="search"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search By Name or Symbol"
          className="w-[65%] h-[80%] border-2 border-gray-600 text-gray-100 flex items-center text-[16px] font-medium bg-gray-800 p-2.5 placeholder-gray-100"
        />
        <div
          id="sort-btn1"
          className="btn w-[15%] h-[80%] border-2 border-gray-600 text-gray-100 bg-gray-800 flex justify-center items-center text-[16px] rounded-lg font-medium cursor-pointer"
          onClick={() =>
            setSortedData([...data].sort((a, b) => a.market_cap - b.market_cap))
          }
        >
          Sort By Mkt Cap
        </div>
        <div
          id="sort-btn2"
          className="btn w-[15%] h-[80%] border-2 border-gray-600 text-gray-100 bg-gray-800 flex justify-center items-center rounded-lg text-[16px] font-medium cursor-pointer"
          onClick={() =>
            setSortedData(
              [...data].sort(
                (a, b) =>
                  b.market_cap_change_percentage_24h -
                  a.market_cap_change_percentage_24h
              )
            )
          }
        >
          Sort By Percentage
        </div>
      </div>
      <Table data={sortedData} searchValue={searchValue} />
    </div>
  );
};

export default SearchAndSoetingBar;

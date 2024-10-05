import React from "react";

const Table = ({ data, searchValue }) => {
  return (
    <table
      id="Table"
      className="w-full h-auto text-gray-100 text-[16px] font-medium bg-gray-800 border-collapse"
    >
      <tbody className="w-auto">
        {data
          .filter(
            (item) =>
              item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
              item.symbol.toLowerCase().includes(searchValue.toLowerCase())
          )
          .map((item) => (
            <tr className="row w-full h-[50px]" key={item.id}>
              <td>
                <div className="logo_name flex min-w-[20%] min-h-[101.5%] text-left">
                  <div className="logo inline-block flex justify-center items-center">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-[30px] h-[30px]"
                    />
                  </div>
                  <div className="name flex justify-center items-center text-[16px] ml-[5px]">
                    {item.name}
                  </div>
                </div>
              </td>
              <td className="symbol text-left">{item.symbol.toUpperCase()}</td>
              <td className="price">${item.current_price}</td>
              <td className="volume">${item.total_volume}</td>
              <td
                className={`percentage ${
                  item.market_cap_change_percentage_24h >= 0
                    ? "text-green-500"
                    : "text-red-500"
                }`}
              >
                {item.market_cap_change_percentage_24h.toFixed(2)}%
              </td>
              <td className="market_cap">Mkt Cap: ${item.market_cap}</td>
            </tr>
          ))}
      </tbody>
    </table>
  );
};

export default Table;

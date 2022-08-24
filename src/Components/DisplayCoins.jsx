import React, { useState } from "react";
import CoinsItem from "./CoinsItem";
import "./DisplayCoins.css";
import "./Overlay.css";

function DisplayCoins(props) {
  const [search, setSearch] = useState("");

  function searchHandler(e) {
    setSearch(e.target.value);
  }

  return (
    <div className="container">
      <div>
        <input
          onChange={searchHandler}
          className="search"
          type="text"
          placeholder="Search..."
        />
        <div className="heading">
          <p>#</p>
          <p className="coin-name">Coin</p>
          <p>Price</p>
          <p>24/h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Mkt Cap</p>
        </div>
        {props.coins
          .filter((val) => {
            if (search === "") {
              return val;
            } else if (val.name.toLowerCase().includes(search.toLowerCase())) {
              return val;
            }
          })
          .map((coins) => {
            return <CoinsItem coins={coins} key={coins.id} />;
          })}
      </div>
    </div>
  );
}

export default DisplayCoins;

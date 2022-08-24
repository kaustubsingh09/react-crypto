import React, { useState, useEffect } from "react";
import axios from "axios";
import DisplayCoins from "./DisplayCoins";

function CoinsMarket() {
  const [coins, setCoins] = useState([]);

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=50&page=1&sparkline=false";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
      })
      .catch((error) => {});
  }, []);

  return (
    <div>
      <DisplayCoins coins={coins} />
    </div>
  );
}

export default CoinsMarket;

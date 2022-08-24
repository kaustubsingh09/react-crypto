import React from "react";
import "../Components/Overlay.css";
import CoinsMarket from "./CoinsMarket";

function Overlay() {

  return (
    <div>
      <div className="search-box">
        <div className="coin-box-view">
          <CoinsMarket></CoinsMarket>
        </div>
      </div>
    </div>
  );
}

export default Overlay;

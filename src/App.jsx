import React from "react";
import "./App.css";
import Overlay from "./Components/Overlay";

function App() {
  return (
    <div className="head">
      <h1>Real <span>Time</span> Crypto <span>Tracker</span></h1>
      <Overlay></Overlay>
    </div>
  );
}

export default App;

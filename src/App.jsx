import React, { useState } from "react";
import CurrentLocation from "../src/components/CurrentLocation"
import "./App.css";

function App() {

  return (
    <React.Fragment>
      <div className="container">
        <CurrentLocation />
      </div>
    </React.Fragment>
  );
}

export default App;

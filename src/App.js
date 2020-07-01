import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Seller from "./components/seller";
import Navbar from "./components/navbar";
function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Seller />
    </React.Fragment>
  );
}

export default App;

import React from "react";
import "./Loader.css";
import awlogo from "./awlogo.png";

function Loader() {
  return (
    <div className="Loader-cont">
      <div class="loader">
        <img
          class="image"
          src={awlogo}
          alt="Logo"
        />
        <div class="loader-third"></div>
      </div>
    </div>
  );
}

export default Loader;

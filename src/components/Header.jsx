import React from "react";
import "./Header.css";

function Header() {
  return (
    <>
      <div className=" h-5 container ">
        <div className="text-white bg-black barTop d-flex justify-content-between">
          <div className="Hackflix">Hackflix</div>
          <div className="Home ">Home</div>
        </div>
        <div className="bacroundImg ">
          <div className="Header  text-white d-flex justify-content-end align-items-center flex-column">
            <h1>!Tus películas favoritas¡</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;

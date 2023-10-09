import React from "react";

function Header() {
  return (
    <div className="bg-black h-5">
      <div className="">
        <div className="text-white p-2 d-flex justify-content-between">
          <div className="bg-teal-400">Hackflix</div>
          <div className="bg-teal-400">Home</div>
        </div>
        <div className="Header d-flex justify-content-center align-items-center flex-column">
          <h1>!Tus películas favoritas¡</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </div>
  );
}

export default Header;

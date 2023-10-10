import React from "react";
import Image from "react-bootstrap/Image";
function Header() {
  return (
    <>
      <div className="bg-black h-5 container">
        <img src="ttps://registry.npmjs.org/update-browserslist-db/-/update-browserslist-db-1.0.11.tgz" />
        <div className="text-white d-flex justify-content-between ">
          <div className="Hackflix">Hackflix</div>
          <div className="Home ">Home</div>
        </div>

        <div className="Header d-flex justify-content-center align-items-center flex-column">
          <h1>!Tus películas favoritas¡</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
    </>
  );
}

export default Header;

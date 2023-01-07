import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <input type={"text"} placeholder={"Search"} />
      <h1>Vacation Seeker</h1>
      <div className="btns">
        <button className="secondary-btn">Stories</button>
        <button className="secondary-btn">Vacations</button>
        <button className="primary-btn">Subscribe</button>
      </div>
    </div>
  );
};

export default Navbar;

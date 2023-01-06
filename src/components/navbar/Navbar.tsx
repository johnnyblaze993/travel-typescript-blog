import React from "react";
import "./Navbar.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <input type={"text"} placeholder={"search"} />
      <h1>Vacation Seeker</h1>
      <div>
        <button>Travel stories</button>
        <button>Vacations</button>
        <button>Subscribe</button>
      </div>
    </div>
  );
};

export default Navbar;

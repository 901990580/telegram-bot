import React from "react";
import menu from "./assets/menu_1.jpg"

const Menu = () => {
  return (
    <div className="menu">
      <p>Hello!</p>
      <h1>Abdulloh</h1>
      <div>
        <p>About us</p>
        <img src={menu} alt="" />
      </div>

      <div className="">
        <p>Our courses</p>
      </div>
    </div>
  );
};

export default Menu;

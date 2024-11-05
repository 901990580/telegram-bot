import React from "react";
import menu from "./assets/menu_1.jpg"
import courses from "./assets/menu_2.jpeg"
import { IoIosArrowForward } from "react-icons/io";

const Menu = () => {
  return (
    <div className="menu">
      <p>Hello!</p>
      <h1>Shoxrux</h1>
      <div>
        <p>About us <span><IoIosArrowForward /></span></p>
        
        <img src={menu} alt="" />
      </div>

      <div className="">
        <p>Our courses</p>
        <img src={courses} alt="" />
      </div>
    </div>
  );
};

export default Menu;

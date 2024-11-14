import React from "react";
import "./arLink.css";
import { useNavigate } from "react-router-dom";

// ? import icons
import { IoMdArrowDropleft } from "react-icons/io";

const ArLink = () => {
  let navigate = useNavigate();

  function leftIconFunc() {
    navigate(-1);
  }
  return (
    <div className="arlink">
      <button className="back-button" onClick={leftIconFunc}>
        <IoMdArrowDropleft />
      </button>
      <h3>AR Links</h3>
      <div></div>
    </div>
  );
};

export default ArLink;

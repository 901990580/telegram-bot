import React from "react";
import "./arLink.css";
import { useNavigate } from "react-router-dom";

// ? import img
import link from "../../assets/image.png"
import link1 from "../../assets/link.png"
import link2 from "../../assets/image1.png"


// ? import icons
import { IoMdArrowDropleft } from "react-icons/io";

const ArLink = () => {
  let navigate = useNavigate();

  function leftIconFunc() {
    navigate(-1);
  }
  return (
    <div className="arlink">
      <div className="arlink_dis">
        <button className="back-button" onClick={leftIconFunc}>
          <IoMdArrowDropleft />
        </button>
        <h3>AR Links</h3>
        <div></div>
      </div>

      <div className="arlink_img">
          <img src={link} alt="link" />
          <img src={link1} alt="link" />
          <img src={link2} alt="link" />
      </div>
    </div>
  );
};

export default ArLink;

import React, { useEffect, useState } from "react";
import "./arLink.css";
import { useNavigate } from "react-router-dom";

// ? import icons
import { IoMdArrowDropleft } from "react-icons/io";
import axios from "axios";

const ArLink = () => {
  let [get, setGet] = useState([]);

  let navigate = useNavigate();

  const getDate = () => {
    axios
      .get("http://194.163.171.25:9000/api/ar-links/")
      .then((response) => {
        setGet(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDate(); // Ma'lumotlarni olishni amalga oshiradi
  }, []);

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

      <ul>
        {get.map((item) => (
          <li>
            <img src={item.image} alt="" />
            <p>{item.url}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArLink;

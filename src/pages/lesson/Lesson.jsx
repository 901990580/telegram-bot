import React from "react";
import top_courses_img from "../../assets/top_courses_img.png";
import javascript from "../../assets/javascript.png";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./lesson.css";

// ? icons
import { FaHome } from "react-icons/fa";
import { FaBell } from "react-icons/fa";

const Lesson = () => {
  const navigate = useNavigate();

  const standardFunc = () => {
    navigate("/standard");
  };

  function leftIconFunc() {
    navigate(-1);
  }

  return (
    <div className="lesson">
      {/* Lesson header */}
      <div className="lesson_header">
        <button className="back-button" onClick={leftIconFunc}>
          <FaHome />
        </button>
        <h2>Home</h2>
        <button className="back-button">
          <FaBell />
        </button>
      </div>

      {/* Courses section */}
      <div className="courses">
        {/* Top Courses */}
        <div className="top_courses">
          <div className="courses_display">
            <h4>Standard Courses</h4>
            <p>
              <IoIosArrowForward />
            </p>
          </div>
          <img
            className="top_courses_img"
            src={javascript}
            alt="Standard Courses"
            onClick={standardFunc}
          />
          <div className="top_courses_p">
            <h4 className="p">Introduction to standard courses</h4>
            <p>
              <FaStar /> <span>4.9</span>
            </p>
          </div>
        </div>

        {/* Bottom Courses */}
        <div className="top_courses">
          <div className="courses_display">
            <h4>Intensive Courses</h4>
            <p>
              <IoIosArrowForward />
            </p>
          </div>
          <img
            className="top_courses_img"
            src={top_courses_img}
            alt="Intensive Courses"
          />
          <div className="top_courses_p">
            <h4 className="p">Introduction to intensive courses</h4>
            <p>
              <FaStar /> <span>4.9</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lesson;

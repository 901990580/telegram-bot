import React from "react";
import lesson_img from "../../assets/lesson_img.png";
import top_courses_img from "../../assets/top_courses_img.png";
import javascript from "../../assets/javascript.png";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import "./lesson.css";

const Lesson = () => {
  const navigate = useNavigate();

  // Navigate to the Standard courses page
  const standardFunc = () => {
    navigate("/standard");
  };

  return (
    <div className="lesson">
      {/* Lesson header */}
      <div className="lesson_header">
        <h2>Home</h2>
        <button>
          <img src={lesson_img} alt="Lesson" />
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

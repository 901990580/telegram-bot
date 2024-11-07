import React from "react";
import lesson_img from "../../assets/lesson_img.png";
import top_courses_img from "../../assets/top_courses_img.png";
import javascript from "../../assets/javascript.png";
import { FaStar } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import "./lesson.css";

const Lesson = () => {
  return (
    <div className="lesson">
      <div className="lesson_header">
        <h2>Home</h2>
        <button>
          <img src={lesson_img} alt="" />
        </button>
      </div>

      <div className="courses">
        <div className="top_courses">
          <div className="courses_display">
            <h4>Standard Courses</h4>
            <p>
              <IoIosArrowForward />
            </p>
          </div>
          <img className="top_courses_img" src={top_courses_img} alt="" />
          <div className="top_courses_p">
            <p className="p">Introduction to standard courses</p>
            <p>
              <FaStar /> <span>4.9</span>
            </p>
          </div>
        </div>

        <div className="bottom_courses">
          <div className="courses_display">
            <h4>Intensive Courses</h4>
            <p>
              <IoIosArrowForward />
            </p>
          </div>
          <img className="top_courses_img" src={javascript} alt="" />
          <div className="top_courses_p">
            <p className="p">Introduction to intensive courses</p>
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

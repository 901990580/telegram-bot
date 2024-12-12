import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";

// Image imports
import standard_img from "../../assets/javascript.png";
import teacher from "../../assets/photo_2024-11-12_14-33-48.jpg";

// CSS file import
import "./standard.css";
import axios from "axios";

const Standard = () => {
  const navigate = useNavigate();

  const [courses, setCourses] = useState([]);

  const fetchCourses = () => {
    axios
      .get("http://194.163.171.25:9000/api/courses/")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
      });
  };

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourse = () => {
    axios
      .get("http://194.163.171.25:9000/api/course-images/")
      .then((response) => {
        setCourses(response.data);
      })
      .catch((err) => {
        console.error("Error fetching courses:", err);
      });
  };

  useEffect(() => {
    fetchCourse();
  }, []);

  const leftFunc = () => {
    navigate(-1);
  };

  const goToCourse = (id) => {
    navigate(`/courses`);
  };

  return (
    <div className="result">
      <div className="result_dis" data-aos="fade-up">
        <button className="back-button" onClick={leftFunc}>
          <IoMdArrowDropleft />
        </button>
        <h3>Standard Courses</h3>
        <div></div>
      </div>

      <div className="result_div1">
        {courses.map((course) => (
          <div
            className="result_div2"
            data-aos="fade-up"
            key={course.id}
            onClick={() => goToCourse(course.id)}
          >
            <div className="standartCourses">
              <img
                className="image2"
                src={course.img || standard_img}
                alt=""
              />
              <div className="cart_standart">
                <h2>{course.title}</h2>
                <p className="i_bar">
                  <FaStar /> <span>{course.rating || "0"}</span>{" "}
                </p>
              </div>
              <div className="result_div3">
                <div>
                  <img
                    src={course.image || teacher}
                    alt=""
                  />
                  <p>{course.full_name}</p>{" "}
                </div>
                <h3>{course.price}</h3>{" "}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Standard;

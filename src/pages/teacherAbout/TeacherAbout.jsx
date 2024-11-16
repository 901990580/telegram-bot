import React from "react";
import { useNavigate } from "react-router-dom";
import './teacherAbout.css';

// ? import img
import teacher from "../../assets/photo_2024-11-12_14-33-48.jpg";
import standard_img from "../../assets/javascript.png";
import real_project from "../../assets/real_project.png";

// ? import icons
import { IoMdArrowDropleft } from "react-icons/io";
import { FaStar } from "react-icons/fa";

// Main component
const TeacherAbout = () => {
  let navigate = useNavigate();

  function leftIconFunc() {
    navigate(-1); // Back button functionality
  }

  return (
    <div className="teacher-about-container">
      {/* Header */}
      <div className="teacher-header">
        <button className="back-button" onClick={leftIconFunc}>
          <IoMdArrowDropleft />
        </button>
        <h3>About Teacher</h3>
        <div></div>
      </div>

      {/* Teacher Info */}
      <div className="teacher-info">
        <div className="teacher-photo">
          <img src={teacher} alt="teacher" />
          <h3>Muradov Shaxzod</h3>
          <p>Frontend Designer</p>
        </div>

        <div className="teacher-experience">
          <h4>Experience</h4>
          <p>
            He is the most talented in frontend design. He has experience in
            creating complex UI/UX, developing responsive layouts, and much
            more. A passionate learner who loves to create efficient and
            beautiful designs.
          </p>
        </div>

        {/* Courses */}
        <div className="teacher-courses" data-aos="fade-up-right">
          <h3>Courses</h3>
          <div className="course-card">
            <img className="course-img" src={standard_img} alt="course" />
            <div className="course-info">
              <h2>Introduction to Frontend</h2>
              <p className="course-rating">
                <FaStar /> <span>4.9</span>
              </p>
            </div>
            <div className="course-price">
              <h3>599,000 UZS</h3>
            </div>
          </div>
        </div>

        {/* Projects */}
        <div className="teacher-projects" data-aos="fade-up-left">
          <h3>Real Projects</h3>
          <div className="project-card">
            <img className="project-img" src={real_project} alt="project" />
            <div className="project-info">
              <h2>Name of the Project</h2>
              <p>
                Some description about this project ipsum dolor sit amet,
                consectetur adipiscing elit. Donec sollicitudin.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherAbout;

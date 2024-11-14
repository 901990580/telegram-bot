import React from "react";
import "./teacherAbout.css";
import { useNavigate } from "react-router-dom";

// ? import img
import teacher from "../../assets/photo_2024-11-12_14-33-48.jpg";
import standard_img from "../../assets/javascript.png";

// ? import icons
import { IoMdArrowDropleft } from "react-icons/io";
import { FaStar } from "react-icons/fa";

const TeacherAbout = () => {
  let navigate = useNavigate();

  function leftIconFunc() {
    navigate(-1);
  }
  return (
    <div
      className="location"
      data-aos="fade-down"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
    >
      {/* ? site bar */}
      <div className="location_div1">
        <button className="back-button" onClick={leftIconFunc}>
          <IoMdArrowDropleft />
        </button>
        <h3>About Teacher</h3>
        <div></div>
      </div>

      {/* ? text bar Experience aftabiografia */}
      <div className="location_div2">
        <div className="location_div3">
          <img src={teacher} alt="teacher" />
          <h3>Muradov Shaxzod</h3>
          <p>Frontend designer</p>
        </div>
        <div className="location_div4">
          <h4>Experience</h4>
          <p>
            He is the most talanted to ipsum dolor sit amet, consectetur
            adipiscing elit. Morbi ut nisl quis massa congue tempus. Fusce
            placerat justo ac mauris ultricies viverra. Phasellus feugiat enim
            tellus
          </p>
        </div>

        {/* course */}
        <div className="location_div5" data-aos="fade-up-right">
          <h3>Courses</h3>
          <div className=" standartCourses">
            <img className="image2" src={standard_img} alt="werty" />
            <div className="dis cart_standart">
              <h2>Introduction to Frontend</h2>
              <p>Beginner</p>
              <p className="i_bar">
                <FaStar /> <h4> 4.9</h4>
              </p>
            </div>
            <div className="location_div6">
              <h3>599 000 so`m</h3>
            </div>
          </div>
        </div>
        {/* ? projects */}

        <div className="location_div7" data-aos="fade-up-left">
          <h3>Real Projects</h3>
          <div className="location_div5">
            <div className=" standartCourses">
              <img className="image2" src={standard_img} alt="werty" />
              <div className="dis cart_standart">
                <h2>Name of the project</h2>
                {/* <p className="i_bar">
                  <FaStar /> <h4> 4.9</h4>
                </p> */}
              </div>
              <div className="location_div6">
                <p>
                  Some description about this project ipsum dolor sit amet,
                  consectetur
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeacherAbout;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";

// Image imports
import standard_img from "../../assets/javascript.png"; // Kurs rasmi
import teacher from "../../assets/photo_2024-11-12_14-33-48.jpg"; // O'qituvchi rasmi

// CSS faylini import qilish
import "./standard.css";

const Standard = () => {
  const navigate = useNavigate();
  // Sahifaga orqaga qaytish
  const leftFunc = () => {
    navigate(-1); // Orqaga qaytish
  };

  // Ar sahifasiga o'tish
  const arFunc = () => {
    navigate("/courses");
  };

  // Kurslar ro'yxati
  const item = [
    {
      id: 1,
      img: standard_img,
      img1: teacher,
      title: "Introduction to Frontend",
      teacher: "Shaxzod Muradov",
      price: "599 000 so`m",
      rating: 4.9,
    },
    {
      id: 2,
      img: standard_img,
      img1: teacher,
      title: "Advanced JavaScript",
      teacher: "Ali Mirkhamidov",
      price: "499 000 so`m",
      rating: 4.8,
    },
    {
      id: 3,
      img: standard_img,
      img1: teacher,
      title: "React JS for Beginners",
      teacher: "Mukhammad Ali",
      price: "450 000 so`m",
      rating: 4.7,
    },

    {
      id: 4,
      img: standard_img,
      img1: teacher,
      title: "React JS for Beginners",
      teacher: "Mukhammad Ali",
      price: "450 000 so`m",
      rating: 4.7,
    },

    {
      id: 5,
      img: standard_img,
      img1: teacher,
      title: "React JS for Beginners",
      teacher: "Mukhammad Ali",
      price: "450 000 so`m",
      rating: 4.7,
    },

    {
      id: 6,
      img: standard_img,
      img1: teacher,
      title: "React JS for Beginners",
      teacher: "Mukhammad Ali",
      price: "450 000 so`m",
      rating: 4.7,
    },

    {
      id: 7,
      img: standard_img,
      img1: teacher,
      title: "React JS for Beginners",
      teacher: "Mukhammad Ali",
      price: "450 000 so`m",
      rating: 4.7,
    },

    {
      id: 8,
      img: standard_img,
      img1: teacher,
      title: "React JS for Beginners",
      teacher: "Mukhammad Ali",
      price: "450 000 so`m",
      rating: 4.7,
    },

    {
      id: 9,
      img: standard_img,
      img1: teacher,
      title: "React JS for Beginners",
      teacher: "Mukhammad Ali",
      price: "450 000 so`m",
      rating: 4.7,
    },

    {
      id: 10,
      img: standard_img,
      img1: teacher,
      title: "React JS for Beginners",
      teacher: "Mukhammad Ali",
      price: "450 000 so`m",
      rating: 4.7,
    },
  ];

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
        {item.map((course) => (
          <div
            className="result_div2"
            data-aos="fade-up"
            key={course.id}
            onClick={arFunc} // Bu yerda har bir kursga bosish orqali "/Ar" sahifasiga o'tiladi
          >
            <div className="standartCourses">
              <img
                className="image2"
                src={course.img}
                alt=""
              />
              <div className="dis cart_standart">
                <h2>{course.title}</h2>
                <p className="i_bar">
                  <FaStar /> <h4>{course.rating}</h4>
                </p>
              </div>
              <div className="result_div3">
                <div>
                  <img src={course.img1} alt="" />
                  <p>{course.teacher}</p>
                </div>
                <h3>{course.price}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Standard;

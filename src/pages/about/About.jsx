import React, { useEffect, useState } from "react";
import "./about.css";

// Import images
import about_1 from "../../assets/menu_1.jpg";
import logo from "../../assets/logo_2.png";
import swiper1 from "../../assets/swiper1.png";

// Swiper components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// React Router
import { useNavigate } from "react-router-dom";

// Icons
import { IoMdArrowDropleft } from "react-icons/io";
import { FaYoutube, FaTelegramPlane, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";
import axios from "axios";

const About = () => {
  const [get, setGet] = useState([]);

  const navigate = useNavigate();

  const getDate = () => {
    axios
      .get("http://194.163.171.25:9000/api/instructors/")
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

  const teacherAbout = () => {
    navigate("/teacherAbout");
  };

  // Navigate back
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="about">
      {/* Header */}
      <div className="about_header">
        <button className="back-button" onClick={handleBack}>
          <IoMdArrowDropleft />
        </button>
        <h3>About Us</h3>
        <div></div>
      </div>

      <img src={about_1} alt="About us" className="about_banner" />

      {/* Team Information */}
      <div className="about_div">
        <div className="about_atribut">
          <h3>About Our Team</h3>
          <p>
            Our team members are highly talented and experienced professionals.
            We strive to deliver excellence through collaboration and
            innovation.
          </p>
        </div>

        {/* Team Members */}
        <div className="slider_about">
          <h3>Our Team Members</h3>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            <ul>
              {get.map((item) => (
                <SwiperSlide key={item.id}>
                  <li className="peopleCart">
                    <img
                      src={item.photo}
                      alt={item.full_name}
                      onClick={teacherAbout}
                    />
                    <h3>{item.full_name}</h3>
                    <p>{item.position}</p>
                    <p>Experience: {item.experience}</p>
                  </li>
                </SwiperSlide>
              ))}
            </ul>
          </Swiper>
        </div>

        {/* Swiper Slider 2 */}
        <div className="slider_about">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            freeMode
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            {[...Array(8)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="peopleCart members">
                  <div className="people_img_bar">
                    <img src={swiper1} alt="Member" />
                    <div className="people_text_bar">
                      <h3>Robert Fox</h3>
                      <p>@alessandroveronezi</p>
                      {[...Array(5)].map((_, starIndex) => (
                        <FaStar key={starIndex} className="star-icon" />
                      ))}
                    </div>
                  </div>
                  <p>
                    While Corfu gives us the ability to shoot by the sea with an
                    amazing blue background, Florina brings a gentle and warm
                    vibe.
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        {/* Location */}
        <div className="cart_4">
          <h3>Our Location</h3>
          <p>Vokzal IT TAT</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.762151677482!2d66.92396777544492!3d39.67756460029653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19d54b324835%3A0xdf389d78adb91db2!2sIT%20TAT!5e0!3m2!1sru!2s!4v1730894013647!5m2!1sru!2s"
            width="100%"
            height="auto"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* Footer */}
      <footer>
        <div className="footer_1">
          <img src={logo} alt="Logo" />
          <div className="footer_icons">
            <FaYoutube />
            <AiFillInstagram />
            <FaTelegramPlane />
            <FaFacebook />
          </div>
        </div>

        <div className="footer_bottom">
          <h2>A meaningful slogan goes here</h2>

          <div className="footer_about">
            <h3>About</h3>
            <p>Courses</p>
            <p>AR links</p>
            <p>Team</p>
          </div>

          <div className="footer_subscription">
            <h3>Subscription</h3>
            <p>Information</p>
            <p>Payment</p>
            <p>Help</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default About;

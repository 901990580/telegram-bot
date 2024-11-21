import React from "react";
import "./about.css";

// ? import img
import about_1 from "../../assets/menu_1.jpg";
import logo from "../../assets/logo_2.png";
import swiper from "../../assets/swiper.png";
import swiper1 from "../../assets/swiper1.png";

// ? swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// Import Swiper modules
import { FreeMode, Pagination, Autoplay } from "swiper/modules";

// ? react icons
import { useNavigate } from "react-router-dom";
import { IoMdArrowDropleft } from "react-icons/io";
import { FaYoutube, FaTelegramPlane, FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaStar } from "react-icons/fa6";

const About = () => {
  let navigate = useNavigate();

  // Sahifaga orqaga qaytish
  let leftFunc = () => {
    navigate(-1); // Orqaga qaytish
  };

  return (
    <div className="about">
      <div className="about_header">
        <button className="back-button" onClick={leftFunc}>
          <IoMdArrowDropleft />
        </button>
        <h3>About Us</h3>
        <div></div>
      </div>

      <img src={about_1} alt="" />

      <div className="about_div">
        <div className="about_atribut">
          <h3>About Our Team </h3>
          <p>
            Our team members are the most talanted to ipsum dolor sit amet,
            consectetur adipiscing elit. Morbi ut nisl quis massa congue tempus.
            Fusce placerat justo ac mauris ultricies viverra. Phasellus feugiat
            enim tellus
          </p>
        </div>

        <div className="slider_about">
          <h3>Our Team Member</h3>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            modules={[FreeMode, Pagination, Autoplay]}
            className="mySwiper"
          >
            {[...Array(8)].map((_, index) => (
              <SwiperSlide key={index}>
                <div className="peopleCart">
                  <img src={swiper} alt="Team Member" />
                  <h3>Alijon Sobirov</h3>
                  <p>SMM Designer</p>
                </div>
              </SwiperSlide>
            ))}
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
                        // <i key={starIndex} className="bx bxs-star"></i>
                        <FaStar />
                      ))}
                    </div>
                  </div>
                  <p>
                    While Corfu gives us the ability to shoot by the sea with an
                    amazing blue background full of light from the sky, Florina
                    gives us its gentle side.
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

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

      {/* ? Footer */}
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

        <div className="bottom"></div>

        <div className="footer_bottom">
          <h2>Bu yerda qandaydir ma’noli shior yozilgan bo’ladi</h2>

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

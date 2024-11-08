import React, { useState } from "react";
// ? xarita
import "leaflet/dist/leaflet.css";
// import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
// import Box from '@mui/material/Box';
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
// ? react icons
import { useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegramPlane } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
// ? import img
import home_1 from "../../assets/menu_1.jpg";
import home_2 from "../../assets/menu_2.jpeg";
import link from "../../assets/link.png";
import logo from "../../assets/logo_2.png";
import "./home.css";

const Home = () => {
  let navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullname: "",
    phone: "",
    course: "",
  });

  // Handlers
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form validation logic (you can expand this)
    if (!formData.fullname || !formData.phone || !formData.course) {
      alert("Please fill in all fields!");
    } else {
      alert("Form submitted successfully!");
      // Reset form
      setFormData({
        fullname: "",
        phone: "",
        course: "",
      });
    }
  };

  const lessonFunc = () => {
    navigate("/lesson");
  };

  const AboutUsFunc = () => {
    navigate("/AboutUs");
  };

  const ArFunc = () => {
    navigate("/Ar");
  };

  const LocationFunc = () => {
    navigate("/Location");
  };

  const ResultFunc = () => {
    navigate("/Result");
  };

  return (
    <div
      className="container"
      data-aos="fade-left"
      data-aos-anchor="#example-anchor"
      data-aos-offset="500"
      data-aos-duration="500"
    >
      {/* ? imgs texts */}
      <div className="menu">
        <h4>Hello!</h4>
        <br />
        <h2>Shoxrux</h2>
        {/* ? about us */}
        <div className="cart_1 cart">
          <div className="cart_dis">
            <h3>About Us</h3>
            <IoIosArrowForward />
          </div>
          <img src={home_1} alt="About Us" />
        </div>
        {/* ? courses */}
        <div className="cart_2 cart">
          <div className="cart_dis">
            <h3>Our Courses</h3>
            <IoIosArrowForward />
          </div>
          <img src={home_2} alt="Courses" onClick={lessonFunc} />
        </div>
        {/* ? ar link */}
        <div className="cart_3 cart">
          <div className="cart_dis">
            <h3>Ar Link</h3>
            <IoIosArrowForward />
          </div>
          <img src={link} alt="AR Link" />
        </div>

        {/* /contact */}
        <div className="cont">
          <div className="cart_5">
            <h3>Contact Us</h3>
            <p>Biz har doim sizning istaklaringizni qadirlaymiz.</p>
            {/* ? inp and select */}
            <form className="contact" onSubmit={handleSubmit}>
              {/* ? input */}
              <TextField
                className="textField"
                id="fullname-basic"
                label="Full name"
                variant="outlined"
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Full name"
                required
              />
              <br />
              <br />
              <TextField
                className="textField"
                id="phone-basic"
                label="Phone number"
                variant="outlined"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone number"
                required
                pattern="[0-9]{9,13}"
                title="Please enter a valid phone number"
              />
              <br />
              <br />
              {/* ? select */}
              <select
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="" disabled>
                  Choose a course
                </option>
                <option value="Frontend">Frontend</option>
                <option value="Backend">Backend</option>
                <option value="Foundation">Foundation</option>
                <option value="SMM">SMM</option>
                <option value="Robototexnika">Robototexnika</option>
                <option value="Android">Android</option>
                <option value="Graphic Design">Graphic Design</option>
                <option value="Computer Literacy">Computer Literacy</option>
                <option value="Computer Literacy Kids">
                  Computer Literacy Kids
                </option>
              </select>
              <br />
              <br />
              {/*  click button */}
              <Button type="submit" variant="contained">
                Send
              </Button>
            </form>
          </div>
        </div>

        {/* ? location */}
        <div className="cart_4">
          <h3>Our Location</h3>
          <p>Vokzal IT TAT</p>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3070.762151677482!2d66.92396777544492!3d39.67756460029653!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4d19d54b324835%3A0xdf389d78adb91db2!2sIT%20TAT!5e0!3m2!1sru!2s!4v1730894013647!5m2!1sru!2s"
            width={`100%`}
            height={`auto`}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>

      {/* ? Footer */}
      <footer>
        <div className="footer_1">
          <img src={logo} alt="" />
          <div className="footer_icons">
            <FaYoutube />
            <AiFillInstagram />
            <FaTelegramPlane />
            <FaFacebook />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;

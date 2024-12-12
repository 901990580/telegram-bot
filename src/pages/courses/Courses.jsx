import React, { useEffect, useState } from "react";
import "./courses.css";

// Import images
import standardImg from "../../assets/javascript.png";
import vektorImg from "../../assets/users.png";
import bookImg from "../../assets/book1.png";
import soatImg from "../../assets/soat1.png";
import peoplesImg from "../../assets/people.png";

// Import icons
import { FaStar } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { MdKeyboardArrowRight } from "react-icons/md";

// Import material UI components
import { Button, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Courses = () => {
  const navigate = useNavigate();
  const [courseData, setCourseData] = useState([]);
  const [formData, setFormData] = useState({
    full_name: "",
    phone_number: "",
    days: "",
    course: "",
    hours: "",
    comment: "",
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch course images on component mount
  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(
          "http://194.163.171.25:9000/api/course-images/"
        );
        setCourseData(response.data);
      } catch (error) {
        console.error("Error fetching course data:", error);
      }
    };

    fetchCourseData();
  }, []);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(
        "http://194.163.171.25:9000/api/registration-requests/",
        formData
      );
      setFormData({
        full_name: "",
        phone_number: "",
        days: "",
        course: "",
        hours: "",
        comment: "",
      });
      handleCloseModal();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  let handleEnrollClick = () => {
    setIsModalOpen(true);
  };

  // Close modal
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  // Navigate to the previous page
  const handleBackClick = () => {
    navigate(-1);
  };

  // Navigate to the teacher's profile
  const handleTeacherClick = () => {
    navigate("/teacherAbout");
  };

  return (
    <div className="result" data-aos="flip-right">
      <div className="result_dis">
        <button className="back-button" onClick={handleBackClick}>
          <IoMdArrowDropleft />
        </button>
        <h3>Frontend Course</h3>
        <div></div>
      </div>

      <div className="result_div1 ar">
        {courseData.map((course, index) => (
          <div className="result_div2" key={index}>
            <div className="standartCourses">
              <img className="image2" src={standardImg} alt="course" />
              <div className="frontend">
                <Button type="submit" variant="contained">
                  Best Seller
                </Button>
                <div>
                  <img src={vektorImg} alt="vector" />
                  <span>3.4k</span>
                </div>
                <p className="i_bar">
                  <FaStar /> <span>4.9</span>
                </p>
              </div>
              <div className="left">
                <h3>599,000 so`m</h3>
                <span>699,000 so`m</span>
              </div>
              <div className="ar_div3" onClick={handleTeacherClick}>
                <div className="imgTeacher">
                  <li className="imgTeacher">
                    <img src={course.image} alt="teacher" />
                    <div>
                      <p>Shoxrux Axmadjonov</p>
                      <span>Frontend Designer</span>
                    </div>
                    <MdKeyboardArrowRight />
                  </li>
                </div>
              </div>
              <div className="leftdiv2">
                <h3>About Course</h3>
                <p>
                  This course covers essential frontend skills including HTML,
                  CSS, and JavaScript. You will learn how to build dynamic
                  websites with modern tools.
                </p>

                <h3>The course includes</h3>
                <div className="arImgBar">
                  <img src={bookImg} alt="book" />
                  <span>15 Lessons</span>
                </div>
                <div className="arImgBar">
                  <img src={soatImg} alt="time" />
                  <span>3 Months</span>
                </div>
              </div>
              <div className="leftdiv2">
                <h3>Student Study</h3>
                <img src={peoplesImg} alt="people" />
              </div>
            </div>

            {/* Enroll Modal */}
            <Button
              type="submit"
              variant="contained"
              onClick={handleEnrollClick}
            >
              Enroll now
            </Button>

            {/* ? registration */}
            <div
              className="z-index"
              style={{ display: isModalOpen ? "block" : "none" }}
              onClick={handleCloseModal}
            >
              {" "}
              {handleCloseModal}
            </div>
            <div
              className="modal"
              data-aos="fade-up"
              style={{ display: isModalOpen ? "block" : "none" }}
            >
              <h3>Registration</h3>
              <form className="contact" onSubmit={handleSubmit}>
                <TextField
                  className="textField"
                  id="fullname-basic"
                  label="Full Name"
                  variant="outlined"
                  type="text"
                  name="full_name"
                  value={formData.full_name}
                  onChange={handleChange}
                  required
                />
                <br />
                <br />
                <TextField
                  className="textField"
                  id="phone-basic"
                  label="Phone Number"
                  variant="outlined"
                  type="number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                  pattern="[0-9]{9,13}"
                  title="Please enter a valid phone number"
                />
                <br />
                <br />
                <select
                  id="course"
                  name="course"
                  value={formData.course}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Choose Course
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
                <select
                  id="days"
                  name="days"
                  value={formData.days}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Choose Days
                  </option>
                  <option value="Juft kunlar">Even Days</option>
                  <option value="Toq kunlar">Odd Days</option>
                </select>
                <br />
                <br />
                <select
                  id="hours"
                  name="hours"
                  value={formData.hours}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>
                    Choose Hours
                  </option>
                  <option value="tushlikgacha">Before Lunch</option>
                  <option value="tushlikdan keyin">After Lunch</option>
                </select>
                <br />
                <br />
                <TextField
                  className="textField"
                  id="comment-basic"
                  label="Leave a Comment"
                  variant="outlined"
                  type="text"
                  name="comment"
                  value={formData.comment}
                  onChange={handleChange}
                  multiline
                  rows={4}
                  fullWidth
                />
                <br />
                <br />
                <Button
                  style={{ marginTop: "10px" }}
                  type="send"
                  variant="contained"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;

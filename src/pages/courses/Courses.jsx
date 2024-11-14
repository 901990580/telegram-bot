import React, { useState } from "react";
import "./courses.css";
// ? import img
import standard_img from "../../assets/javascript.png";
import teacher from "../../assets/photo_2024-11-12_14-33-48.jpg";
import vektor from "../../assets/users.png";
import book from "../../assets/book1.png";
import soat from "../../assets/soat1.png";
import peoples from "../../assets/people.png";
// ? import icons
import { FaStar } from "react-icons/fa";
import { IoMdArrowDropleft } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Button, TextField } from "@mui/material";

const Courses = () => {
  let navigate = useNavigate();

  function leftIconFunc() {
    navigate(-1);
  }

  function teacherFunc() {
    navigate("/teacherAbout");
  }

  // ? modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleEnrollClick = () => {
    setIsModalOpen(true);
  };
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const item = [1];

  return (
    <div className="result" data-aos="flip-right">
      <div className="result_dis">
        <button className="back-button" onClick={leftIconFunc}>
          <IoMdArrowDropleft />
        </button>
        <h3>Frontend Course</h3>
        <div></div>
      </div>

      <div className="result_div1 ar">
        {item.map((_, index) => (
          <div className="result_div2" key={index}>
            <div className="standartCourses">
              <img className="image2" src={standard_img} alt="course" />
              <div className="frontend">
                <Button type="submit" variant="contained">
                  Best Seller
                </Button>
                <div>
                  <img src={vektor} alt="vektor" /> <span>3.4k</span>
                </div>
                <p className="i_bar">
                  <FaStar /> <h4>4.9</h4>
                </p>
              </div>
              <div className="left">
                <h3>599 000 so`m</h3>
                <span>699 000 so`m</span>
              </div>
              <div className="ar_div3" onClick={teacherFunc}>
                <div className="imgTeacher">
                  <img src={teacher} alt="teacher" />
                  <div>
                    <p>Shaxzod Muradov</p>
                    <span>Frontend designer</span>
                  </div>
                </div>
                <MdKeyboardArrowRight />
              </div>
              <div className=" leftdiv2">
                <h3>About Course</h3>
                <p>
                  This course is related to ipsum dolor sit amet, consectetur
                  adipiscing elit. Morbi ut nisl quis massa congue tempus. Fusce
                  placerat justo ac mauris ultricies viverra. Phasellus feugiat
                  enim tellus
                </p>

                <h3>The course includes</h3>
                <div className="arImgBar">
                  <img src={book} alt="b" />
                  <span>15 Lessons</span>
                </div>
                <div className="arImgBar">
                  <img src={soat} alt="s" />
                  <span>3 Months</span>
                </div>
              </div>
              <div className="leftdiv2">
                <h3>Student Study</h3>
                <img src={peoples} alt="peopes" />
              </div>
            </div>
            <Button
              type="submit"
              variant="contained"
              onClick={handleEnrollClick}
            >
              Enroll now
            </Button>
            {/* ? modal */}
            {/* ? */}
            <div
              className="z-index"
              style={{ display: isModalOpen ? "block" : "none" }}
              onClick={handleCloseModal}
            >
              {" "}
              {handleCloseModal}
            </div>
            {/* Modal */}
            <div
              className="modal"
              data-aos="fade-up"
              style={{ display: isModalOpen ? "block" : "none" }}
            >
              <h3>Registration</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
                temporibus placeat saepe harum explicabo laboriosam error, ipsam
                sunt nisi. Dolores distinctio harum consequatur ipsam expedita
                ipsa vero doloribus, totam aut?
              </p>
              <form className="contact">
                {/* Inputs */}
                <TextField
                  className="textField"
                  id="fullname-basic"
                  label="Full name"
                  variant="outlined"
                  type="text"
                  name="fullname"
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
                  type="number"
                  name="phone"
                  placeholder="Phone_number"
                  required
                  pattern="[0-9]{9,13}"
                  title="Please enter a valid phone number"
                />
                <br />
                <br />
                {/* Select Options */}
                <select id="course" name="course" required>
                  <option value="" disabled selected>
                    Choose course
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
                <select id="days" name="days" required>
                  <option value="" disabled selected>
                    Choose days
                  </option>
                  <option value="Juft kunlar">Juft kunlar</option>
                  <option value="Toq kunlar">Toq kunlar</option>
                </select>
                <br />
                <br />
                <select id="hours" name="hours" required>
                  <option value="" disabled selected>
                    Choose hours
                  </option>
                  <option value="tushlikgacha">tushlikgacha</option>
                  <option value="tushlikdan keyin">tushlikdan keyin</option>
                </select>
                <br />
                <br />
                <TextField
                  className="textField"
                  id="comment-basic"
                  label="Leave a comment"
                  variant="outlined"
                  type="text"
                  name="comment"
                  placeholder="Leave a comment"
                  multiline
                  rows={4}
                  fullWidth
                />
                <br />
                <br />
                {/* Submit Button */}
                <Button
                  style={{ marginTop: "10px" }}
                  type="submit"
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

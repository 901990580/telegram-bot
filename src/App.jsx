import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo 1.jpg";
import animation from "./assets/animation.gif";
import { Button } from "@mui/material";
// ? import aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Home from "./pages/home/Home";
import Lesson from "./pages/lesson/Lesson";

function App() {
  let navigate = useNavigate();

  function homeFunc() {
    navigate("/home");
  }

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="content" data-aos="zoom-in-up">
              <div className="content_head">
                <h1>Welcome! </h1>
                <img src={logo} alt="" />
              </div>
              <img className="img" src={animation} alt="" />
              <Button variant="contained" onClick={homeFunc}>
                Let's Start
              </Button>
            </div>
          }
        />
        <Route path="/home" element={<Home />} />
        <Route path="/lesson" element={<Lesson />}/>  
      </Routes>
    </div>
  );
}

export default App;

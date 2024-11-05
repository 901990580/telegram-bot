import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo 1.jpg";
import animation from "./assets/animation.gif";
import Menu from "./Menu";
import { Button } from "@mui/material";
// ? import aos
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function App() {
  let navigate = useNavigate();

  function menuFunc() {
    navigate("/menu");
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
              <Button variant="contained" onClick={menuFunc}>
                Let's Start
              </Button>
            </div>
          }
        />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;

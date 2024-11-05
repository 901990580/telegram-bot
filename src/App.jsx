import { Route, Routes, useNavigate } from "react-router-dom";
import "./App.css";
import logo from "./assets/logo 1.jpg";
import animation from "./assets/animation.gif";
import Menu from "./Menu";

function App() {
  let navigate = useNavigate();

  function menuFunc() {
    navigate("/menu");
  }

  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={
            <div className="content">
              <div className="content_head">
                <h1>Welcome! </h1>
                <img src={logo} alt="" />
              </div>
              <img className="img" src={animation} alt="" />
              <button onClick={menuFunc}>Let's Start</button>
            </div>
          }
        />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </div>
  );
}

export default App;

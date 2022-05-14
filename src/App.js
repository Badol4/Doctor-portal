import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./pages/about/About";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Navber from "./pages/shared/Navber";

function App() {
  return (
    <div>
      <Navber></Navber>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;

// import "./App.css";
import { Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import SignIn from "./Components/Login/SignIn";
import SignUp from "./Components/Login/SignUp";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";

function App() {
  return (
    <div id="appWrap" className="relative">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

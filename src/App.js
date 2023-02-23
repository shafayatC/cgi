// import "./App.css";
import { Route, Routes } from "react-router-dom";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import SignIn from "./Components/Login/SignIn";
import SignUp from "./Components/Login/SignUp";
import Navbar from "./Components/Navbar/Navbar";
import OurCase from "./Components/OurCase/OurCase";
import ProductVideo from "./Components/ProductVideo/ProductVideo";
import ServiceFor from "./Components/ServiceFor/ServiceFor";
import './App.css'; 

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

      {
        /**
         
      <OurCase></OurCase>
      <ServiceFor></ServiceFor>
      <ProductVideo></ProductVideo>
      <ContactUs></ContactUs>
      <Footer></Footer>
         */
      }
    </div>
  );
}

export default App;

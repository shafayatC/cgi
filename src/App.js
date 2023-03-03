// import "./App.css";
import { Route, Routes } from "react-router-dom";

import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import SignIn from "./Components/Login/SignIn";
import SignUp from "./Components/Login/SignUp";
import Navbar from "./Components/Navbar/Navbar";

import "./App.css";
import Product from "./Components/Product/Product";
import PrivacyPolicy from "./Components/PrivacyPolicy/PrivacyPolicy";
import TermsCondition from "./Components/TermsCondition/TermsCondition";
import ContactForm from "./Components/ContactForm/ContactForm";
import Thankyou from "./Components/Thankyou/Thankyou";

function App() {
  return (
    <div id="appWrap" className="relative overflow-hidden">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-condition" element={<TermsCondition />} />
        <Route path="/contact-form" element={<ContactForm />} />
        <Route path="/thank-you/*" element={<Thankyou />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;

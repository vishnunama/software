import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "animate.css";
import Home from "./component/Home";
import Footer from "./component/Footer";
import Header from "./Header";
import AboutUs from "./component/AboutUs";
import Services from "./component/Services";
import FAQ from "./component/FAQ";
import TermAndCondition from "./TermAndCondition";
import { ScrollToTop } from "./component/ScrollToTop";
import ContactUs from "./component/ContactUs";

function App() {


  return (
    <>
    <Router>
            <ScrollToTop/>

      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/FAQ" element={<FAQ />} />
                    <Route path="/TermAndCondition" element={<TermAndCondition />} />
                                        <Route path="/ContactUs" element={<ContactUs />} />

                    


          
        </Routes>
        <Footer />
        <a
          href="https://wa.me/919785211329"
          target="_blank"
          rel="noopener noreferrer"
          className="wow animate__bounceIn"
          data-wow-delay="0.3s"
        >
          <img
            src="img/icons/whatsapp.png"
            alt="WhatsApp Icon"
            className="fixed-icon-whatsapp"
          />
        </a>
      </div>
    </Router>
    </>
  );
}

export default App;

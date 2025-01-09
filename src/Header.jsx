import React, { useState, useEffect } from "react";
import DropDown from "./component/DropDown";
import { Link } from "react-router-dom";

const Header = () => {
  const [isPopupOpen, setPopupOpen] = useState(false); // State for popup visibility
  const [bgColor, setBgColor] = useState("transparent");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // State for sidebar (dropdown)

  const handleScroll = () => {
    if (window.scrollY > 130) {
      setBgColor("#D7DFEF");
    } else {
      setBgColor("transparent");
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen); // Toggle the sidebar state
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark fixed-top"
      id="banner"
      style={{ backgroundColor: bgColor, transition: "background-color 0.3s ease" }}
    >
      <div className="container">
        {/* Brand */}
        <a style={{ color: "black" }} className="navbar-brand" href="#">
          <span>
            <img src="img/core-img/logo.png" alt="logo" />
          </span>{" "}
          Kayzer
        </a>
        {/* Toggler/collapsible Button */}
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleSidebar} // Add click handler to toggle sidebar
        >
          <span className="navbar-toggler-icon" />
        </button>
        {/* Navbar links */}
        <div className="collapse navbar-collapse" id="collapsibleNavbar">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <Link to="./AboutUs" className="nav-link" href="/about-us">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./Services" className="nav-link" href="/about-us">
                Services
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./FAQ" className="nav-link" href="/faq">
                FAQ
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/contact-us">
                Contact
              </a>
            </li>
          </ul>
        </div>
        {/* DropDown Component */}
        <DropDown isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
    </nav>
  );
};

export default Header;

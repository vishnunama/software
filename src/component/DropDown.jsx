import React from "react";
import "./DropDown.css"; // Custom styles for the dropdown/sidebar
import { Link } from "react-router-dom";

const DropDown = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
       <img style={{width:"100px"}} src="img/icons/metablock-logos-main.png" alt="" />
        <button
          className="btn-close"
          onClick={toggleSidebar}
          aria-label="Close"
        >
          &times;
        </button>
      </div>
      <div className="sidebar-body">
        <Link to="/" className="nav-link" onClick={toggleSidebar}>
          Home
        </Link>
        
        <Link to="/AboutUs" className="nav-link" onClick={toggleSidebar}>
          About Us
        </Link>
        <Link to="/Services" className="nav-link" onClick={toggleSidebar}>
          Services
        </Link>
        <Link to="/FAQ" className="nav-link" onClick={toggleSidebar}>
          FAQ
        </Link>
        <Link to="/TermAndCondition" className="nav-link" onClick={toggleSidebar}>
          Terms & Conditions
        </Link>
        <li className="lh-55px"><Link to="./ContactUs" onClick={toggleSidebar} className="btn login-btn ml-50" >Book a Call With Experts!</Link></li>
        
      </div>
    </div>
  );
};

export default DropDown;

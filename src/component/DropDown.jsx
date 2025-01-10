import React from "react";
import "./DropDown.css"; // Custom styles for the dropdown/sidebar
import { Link } from "react-router-dom";

const DropDown = ({ isOpen, toggleSidebar }) => {
  return (
    <div className={`sidebar ${isOpen ? "open" : ""}`}>
      <div className="sidebar-header">
        <h5>Sidebar</h5>
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
      </div>
    </div>
  );
};

export default DropDown;

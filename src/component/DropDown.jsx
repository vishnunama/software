import React from "react";
import "./DropDown.css"; // Custom styles for the dropdown/sidebar

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
        <p>Menu Item 1</p>
        <p>Menu Item 2</p>
        <p>Menu Item 3</p>
      </div>
    </div>
  );
};

export default DropDown;

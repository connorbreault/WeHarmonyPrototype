import React from "react";

function Navbar(props) {
  return (
    <ul className="nav nav-tabs">
      <li className="nav-item">
        <a href="#home" onClick={() => props.handlePageChange("Home")} className="nav-link">
          Home
        </a>
      </li>
      <li className="nav-item">
        <a href="#profile" onClick={() => props.handlePageChange("Profile")} className="nav-link">
          Profile
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact" onClick={() => props.handlePageChange("Contact")} className="nav-link">
          Contact
        </a>
      </li>
    </ul>
  );
}

export default Navbar;

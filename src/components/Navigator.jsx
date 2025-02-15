import React from "react";
import { Box } from "@mui/material";
import { NavLink } from "react-router-dom";

function Navigator() {
  return (
    <Box>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/work-profile" className={({ isActive }) => (isActive ? "active" : "")}>Work Profile</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className={({ isActive }) => (isActive ? "active" : "")}>Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/education" className={({ isActive }) => (isActive ? "active" : "")}>Education</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
          </li>
        </ul>
      </nav>
    </Box>
  );
}

export default Navigator;

import React from "react";
import { Box } from "@mui/material";
import "../../styles.css";
import Footer from './SideBar';
import MainContent from "./MainContent";

function Header() {
  return (
    <Box component="header" sx={{ padding: 10, backgroundColor: "#f4f4f4" }}>
      <div className="wrapper">
        <div className="container">
          <Footer />
         <MainContent />
        </div>
      </div>
    </Box>
  );
}

export default Header;

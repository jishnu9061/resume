import { Box } from '@mui/material'
import React from 'react';
import Footer from '../components/SideBar';
import AboutContent from '../components/AboutContent';

function About() {
  return (
    <Box component="header" sx={{ padding: 10, backgroundColor: "#f4f4f4" }}>
    <div className="wrapper">
      <div className="container">
        <Footer />
       <AboutContent />
      </div>
    </div>
  </Box>
  )
}

export default About

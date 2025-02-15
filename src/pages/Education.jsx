import { Box } from '@mui/material'
import React from 'react';
import EducationContent from '../components/EducationContent';
import Footer from '../components/SideBar';

function Education() {
  return (
    <Box component="header" sx={{ padding: 10, backgroundColor: "#f4f4f4" }}>
    <div className="wrapper">
      <div className="container">
        <Footer />
       <EducationContent />
      </div>
    </div>
  </Box>
  )
}

export default Education

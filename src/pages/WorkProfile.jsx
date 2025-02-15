import { Box } from '@mui/material'
import React from 'react';
import WorkContent from '../components/WorkContent';
import Footer from '../components/SideBar';

function WorkProfile() {
  return (
    <Box component="header" sx={{ padding: 10, backgroundColor: "#f4f4f4" }}>
    <div className="wrapper">
      <div className="container">
        <Footer />
       <WorkContent />
      </div>
    </div>
  </Box>
  )
}

export default WorkProfile

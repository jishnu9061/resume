import { Box } from '@mui/material'
import React from 'react';
import ContactContent from '../components/ContactContent';
import Footer from '../components/SideBar';

function Contact() {
  return (
    <Box component="header" sx={{ padding: 10, backgroundColor: "#f4f4f4" }}>
    <div className="wrapper">
      <div className="container">
        <Footer />
       <ContactContent />
      </div>
    </div>
  </Box>
  )
}

export default Contact

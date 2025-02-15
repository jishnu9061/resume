import { Box } from '@mui/material'
import React from 'react';
import PortfolioContetnt from '../components/PortfolioContent';
import Footer from '../components/SideBar';

function Portfolio() {
  return (
    <Box component="header" sx={{ padding: 10, backgroundColor: "#f4f4f4" }}>
    <div className="wrapper">
      <div className="container">
        <Footer />
       <PortfolioContetnt />
      </div>
    </div>
  </Box>
  )
}

export default Portfolio

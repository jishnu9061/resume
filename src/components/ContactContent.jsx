import React from "react";
import { Box, Typography, Paper } from "@mui/material";
import { Email, Phone, LocationOn } from "@mui/icons-material";

function ContactContent() {
  return (
    <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto", p: 0 }}>
     <div className="main-content">
       <div className="section1 p-30" id="Home"></div>
        <Typography variant="h4" fontWeight="bold" align="center" gutterBottom>
          Contact Us
        </Typography>
        <Typography variant="body1" align="center" gutterBottom>
          Get in touch with us for any inquiries.
        </Typography>

        <Box sx={{ mt: 3, marginLeft: 5 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Email color="primary" sx={{ mr: 1 }} />
            <Typography>Email: support@example.com</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Phone color="primary" sx={{ mr: 1 }} />
            <Typography>Phone: +123 456 7890</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <LocationOn color="primary" sx={{ mr: 1 }} />
            <Typography>Address: 123 Street, City, Country</Typography>
          </Box>
        </Box>
        </div>
        </Box>
  );
}

export default ContactContent;

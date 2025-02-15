import React from "react";
import {
  Box,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
  Container,
} from "@mui/material";
import {
  Work,
  Email,
  Phone,
  LocationOn,
  LinkedIn,
  Facebook,
  Twitter,
  Instagram,
} from "@mui/icons-material";
import profileImg from "../assets/jishnu.jpg";

function Portfolio() {
  return (
    <Box sx={{ maxHeight: "100vh", overflowY: "auto", padding: "20px" }}>
      <div className="main-content">
        <div className="section1 p-30" id="Work">
          <Box textAlign="center" mb={4}>
            <Avatar
              src={profileImg}
              alt="Profile"
              sx={{ width: 150, height: 150, mx: "auto", boxShadow: 3 }}
            />
            <Typography variant="h4" fontWeight="bold" mt={2}>
              JISHNU T K
            </Typography>
            <Typography variant="subtitle1" color="primary">
              Laravel Developer
            </Typography>
            <Typography variant="body1" mt={2} color="textSecondary">
              Backend Developer with 2+ years of experience in Laravel,
              React.js, WordPress, and database management.
            </Typography>
          </Box>

          <Divider />

          {/* Work Experience Section */}
          <Box mt={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Work Experience
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Work color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Seidor Opentrends (Trainee)"
                  secondary="Aug 2022 - Feb 2023 | WordPress, Core PHP, Laravel, MySQL"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Work color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Limenzy Technologies"
                  secondary="May 2023 - June 2024 | Laravel, HTML, CSS, JavaScript"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Work color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Codeneos (Current)"
                  secondary="July 2024 - Present | Laravel, WordPress, HTML, CSS, JavaScript, MySQL"
                />
              </ListItem>
            </List>
          </Box>

          <Divider />

          {/* Contact Section */}
          <Box mt={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Contact
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Email color="primary" />
                </ListItemIcon>
                <ListItemText primary="jishnuganesh27@gmail.com" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Phone color="primary" />
                </ListItemIcon>
                <ListItemText primary="+91 9061670329 / 9526452134" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <LocationOn color="primary" />
                </ListItemIcon>
                <ListItemText primary="Payyanur, Kerala" />
              </ListItem>
            </List>

            {/* Social Icons */}
            <Box mt={2} textAlign="center">
              <IconButton href="#" color="primary">
                <LinkedIn />
              </IconButton>
              <IconButton href="#" color="primary">
                <Facebook />
              </IconButton>
              <IconButton href="#" color="primary">
                <Twitter />
              </IconButton>
              <IconButton href="#" color="primary">
                <Instagram />
              </IconButton>
            </Box>
          </Box>
        </div>
      </div>
    </Box>
  );
}

export default Portfolio;

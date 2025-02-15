import React from "react";
import { Box, Typography, Grid, Avatar, List, ListItem, ListItemIcon, ListItemText, IconButton } from "@mui/material";
import { CalendarToday, Phone, Email, LocationOn, LinkedIn, Facebook, Twitter, Instagram } from "@mui/icons-material";
import profileImg from "../assets/jishnu.jpg";

function MainContent() {
  return (
    <Box>
      <div className="main-content">
        <div className="section1 p-30" id="Home">
          <Typography variant="h4" gutterBottom>
            About Me
          </Typography>
          <Typography variant="h6" color="textSecondary" gutterBottom>
            My Profile
          </Typography>

          {/* Profile Section */}
          <Grid container spacing={4} alignItems="center">
            {/* Profile Image */}
            <Grid item xs={12} md={4}>
              <Avatar
                src={profileImg}
                alt="Profile"
                sx={{ width: 250, height: 250, boxShadow: 3 }}
              />
            </Grid>

            {/* Profile Details */}
            <Grid item xs={12} md={8}>
              <Typography variant="h5" fontWeight="bold">
                JISHNU T K
              </Typography>
              <Typography variant="subtitle1" color="primary">
                Backend Developer
              </Typography>
              <Typography variant="body1" mt={2} color="textSecondary">
                Backend Developer with 2+ years of experience in Laravel &
                React.js, specializing in building scalable web applications,
                RESTful APIs, and database design. Passionate about writing
                clean, efficient, and maintainable code.
              </Typography>

              {/* Contact List */}
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CalendarToday color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="2nd Nov, 1996" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Phone color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="9061670329 / 9526452134" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Email color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="jishnuganesh27@gmail.com" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <LocationOn color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Payyanur, Kerala" />
                </ListItem>
              </List>

              {/* Social Icons */}
              <Box mt={2}>
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
            </Grid>
          </Grid>
        </div>
      </div>
    </Box>
  );
}

export default MainContent;

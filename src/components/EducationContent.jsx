import React from "react";
import { School, Book } from "@mui/icons-material";
import {
  Box,
  Typography,
  Grid,
  Avatar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  IconButton,
  Divider,
} from "@mui/material";
import {
  CalendarToday,
  Phone,
  Email,
  LocationOn,
  LinkedIn,
  Facebook,
  Twitter,
  Instagram,
} from "@mui/icons-material";
import profileImg from "../assets/jishnu.jpg";

function EducationContent() {
  return (
    <Box sx={{ width: "100%", maxWidth: "1200px", mx: "auto", p: 0 }}>
      <div className="main-content">
        <div className="section1 p-30" id="Home">
          <Typography variant="h4" fontWeight="bold" gutterBottom>
            Education
          </Typography>

          <Divider />

          <Box mt={4}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Academic Qualifications
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <School color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Bachelor of Technology in Mechanical Engg"
                  secondary="2014 - 2018 | Kannur University"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <School color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="Higher Secondary Education"
                  secondary="2012 - 2014 | NSSMHHSSP"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <School color="primary" />
                </ListItemIcon>
                <ListItemText
                  primary="SSLC"
                  secondary="2011 - 2012 | NSSMHHSSP"
                />
              </ListItem>
            </List>
          </Box>
        </div>
      </div>
    </Box>
  );
}

export default EducationContent;

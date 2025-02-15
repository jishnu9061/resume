import React from "react";
import {
  Box,
  Typography,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
} from "@mui/material";
import {
  BusinessCenter,
  Code,
  Storage,
  Web,
  CheckCircle,
} from "@mui/icons-material";

function WorkContent() {
  return (
    <Box sx={{ maxHeight: "100vh", overflowY: "auto", padding: "20px" }}>
      <div className="main-content">
        <div className="section1 p-30" id="Work">
          {/* Work Experience Section */}
          <Typography variant="h4" gutterBottom>
            Work Experience
          </Typography>

          <Grid container spacing={4}>
            {/* Codeneos Experience */}
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="bold">
                Laravel Developer - Codeneos
              </Typography>
              <Typography variant="body2" color="textSecondary">
                8th July 2024 - Present
              </Typography>
              <Typography variant="body1" mt={1}>
                - Developing and maintaining web applications using **Laravel**
                & **WordPress**.
              </Typography>
              <Typography variant="body1">
                - Implementing front-end designs using **HTML, CSS,
                JavaScript**.
              </Typography>
              <Typography variant="body1">
                - Managing databases with **MySQL** for optimized performance.
              </Typography>
              <Typography variant="body1">
                - Managed server deployment, configurations, and maintenance on{" "}
                <strong>GoDaddy cPanel</strong>.
              </Typography>
            </Grid>

            {/* Limenzy Technologies Experience */}
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="bold">
                Laravel Developer - Limenzy Technologies
              </Typography>
              <Typography variant="body2" color="textSecondary">
                1st May 2023 - 1st June 2024
              </Typography>
              <Typography variant="body1" mt={1}>
                - Built full-stack applications using **Laravel, HTML, CSS,
                JavaScript**.
              </Typography>
              <Typography variant="body1">
                - Developed custom features and optimized existing Laravel
                applications.
              </Typography>
              <Typography variant="body1">
                - Integrated APIs and handled database management using
                **MySQL**.
              </Typography>
            </Grid>

            {/* Seidor Opentrends Experience */}
            <Grid item xs={12}>
              <Typography variant="h6" fontWeight="bold">
                Trainee Developer - Seidor Opentrends
              </Typography>
              <Typography variant="body2" color="textSecondary">
                1st August 2022 - 1st February 2023
              </Typography>
              <Typography variant="body1" mt={1}>
                - Gained hands-on experience with **WordPress, Core PHP,
                Laravel, and MySQL**.
              </Typography>
              <Typography variant="body1">
                - Assisted in developing WordPress themes and plugins.
              </Typography>
              <Typography variant="body1">
                - Learned about database management and PHP back-end
                development.
              </Typography>
            </Grid>
          </Grid>

          <Divider sx={{ my: 3 }} />

          {/* Skills Section */}
          <Typography variant="h4" gutterBottom>
            Skills & Technologies
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Code color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Laravel & PHP" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Web color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="WordPress Development" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Storage color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="MySQL Database Management" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Storage color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Server Management" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Cpanel" />
                </ListItem>
              </List>
            </Grid>

            <Grid item xs={12} md={6}>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="HTML, CSS, JavaScript" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="RESTful API Development" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Git & Version Control" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="React js" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CheckCircle color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Godaddy" />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </div>
      </div>
    </Box>
  );
}

export default WorkContent;

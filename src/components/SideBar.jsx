import React from 'react';
import { Box } from '@mui/material';
import Navigator from './Navigator';

function Footer() {
  return (
    <Box>
      <div className="left-content p-30">
            <div className="logo">
              <a href="/">
                <span>My</span>
                <span>Resume</span>
              </a>
            </div>
            <Navigator />
            <div className="left-footer">
              <div className="social-icons">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa fa-linkedin-square" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="foot-contact">
                <ul>
                  <li>jishnuganesh27@gmail.com</li>
                  <li>+91 9061670329 / 9526452134</li>
                </ul>
              </div>
              <div className="copy-rights">
                Copyright &copy; 2019 All rights reserved
              </div>
            </div>
          </div>
    </Box>
  )
}

export default Footer

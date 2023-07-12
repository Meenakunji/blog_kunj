import React from "react";
import { useState } from "react";

// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GoogleIcon from "@mui/icons-material/Google";
// import GoogleSignInButton from "../googlelogin";
// import { Box, Button } from "@mui/material";

import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";

const SignupComponent = () => {
  return (
    <div class="form-section">
      <div class="logo clearfix">
        <a href="login-20.html">
          <img src="https://i.postimg.cc/3wgSvKbP/bloggerlogo.png" alt="logo" />
        </a>
      </div>
      <h3>Create An Cccount</h3>

      <form action="#" method="GET">
        <div class="form-group form-box">
          <input
            type="text"
            name="name"
            class="form-control"
            placeholder="Full Name"
            aria-label="Full Name"
          />

          <AccountCircleIcon />
        </div>
        <div class="form-group form-box">
          <input
            type="email"
            name="email"
            class="form-control"
            placeholder="Email Address"
            aria-label="Email Address"
          />
          <EmailIcon />
        </div>
        <div class="form-group form-box">
          <input
            type="password"
            name="password"
            class="form-control"
            autocomplete="off"
            placeholder="Password"
            aria-label="Password"
          />
          <LockIcon />
        </div>
      </form>
    </div>
  );
};

export default SignupComponent;

import React from "react";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import HomeWorkIcon from "@mui/icons-material/HomeWork";

export const FooterComponent = () => {
  return (
    <div>
      <footer className="text-center text-lg-start bg-light text-muted">
        <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>
          <div>
            <a
              href="/"
              className="me-4 text-reset"
              style={{ color: "#3b5998 !important" }}
            >
              <FacebookIcon />
            </a>
            <a
              href="/"
              className="me-4 text-reset"
              style={{ color: "#55acee !important" }}
            >
              <TwitterIcon />
            </a>
            <a
              href="/"
              className="me-4 text-reset"
              style={{ color: "#dd4b39 !important" }}
            >
              <GoogleIcon />
            </a>
            <a
              href="/"
              className="me-4 text-reset"
              style={{ color: "#ac2bac !important" }}
            >
              <InstagramIcon />
            </a>
            <a
              href="/"
              className="me-4 text-reset"
              style={{ color: "##0082ca !important" }}
            >
              <LinkedInIcon />
            </a>
            <a
              href="/"
              className="me-4 text-reset"
              style={{ color: "#333333 !important" }}
            >
              <GitHubIcon />
            </a>
          </div>
        </section>
        <section className="">
          <div className="container text-center text-md-start mt-5">
            <div className="row mt-3">
              <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>Jupiter Blogger
                </h6>
                <img
                  src={"/images/home/bloggerlogo.png"}
                  style={{ width: "110px", contentVisibility: "auto" }}
                  alt="footer logo"
                  loading="lazy"
                  decoding="async"
                />
                <p>
                  Here you can use rows and columns to organize your footer
                  content. Lorem ipsum dolor sit amet, consectetur adipisicing
                  elit.
                </p>
              </div>
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Products</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Angular
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    React
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Vue
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Laravel
                  </a>
                </p>
              </div>
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Pricing
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Settings
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Orders
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Help
                  </a>
                </p>
              </div>
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <HomeWorkIcon />
                  House No 24, 2th Floor,near Sai Temple <br />
                  Sector 16, Old FaridaBad, 121003
                </p>
                <p>
                  <EmailIcon />
                  jupiterblogger@gmail.com
                </p>
                <p>
                  <PhoneIcon /> +91 800 3256 956
                </p>
              </div>
            </div>
          </div>
        </section>

        <div
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
        >
          2023-24 ©️ Copyright © 2023 All rights reserved.
        </div>
      </footer>
    </div>
  );
};

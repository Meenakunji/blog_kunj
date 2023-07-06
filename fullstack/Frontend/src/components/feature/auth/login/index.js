// import React from "react";

// import FacebookIcon from "@mui/icons-material/Facebook";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import GoogleIcon from "@mui/icons-material/Google";
// import GoogleSignInButton from "../googlelogin";
// import { Box, Button } from "@mui/material";

// const LoginComponent = (handleModalClose) => {
//   return (
//     <div>
//       <section className="">
//         <div
//           className="px-4 py-5 px-md-5 text-center text-lg-start"
//           style={{ backgroundColor: "hsl(0, 0%, 96%)" }}
//         >
//           <div className="container">
//             <div className="row gx-lg-5 align-items-center">
//               <div className="col-lg-6 mb-5 mb-lg-0">
//                 <h1 className="my-5 display-3 fw-bold ls-tight">
//                   Login for Exclusive Offers <br />
//                   <span className="text-primary">- Jupiter Blogger</span>
//                 </h1>
//                 <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
//                   Unlock exclusive business offers at Jupiter Blogger. Boost
//                   your growth with tailored deals and discounts on a wide range
//                   of products and services. Sign up today for incredible
//                   opportunities to accelerate your success. Join Jupiter Blogger
//                   now!
//                 </p>
//               </div>

//               <div className="col-lg-6 mb-5 mb-lg-0">
//                 <div className="card">
//                   <div className="card-body py-5 px-md-5">
//                     <form>
//                       <div className="form-outline mb-4">
//                         <label className="form-label" htmlFor="form3Example3">
//                           Email address
//                         </label>
//                         <input
//                           type="email"
//                           id="form3Example3"
//                           className="form-control"
//                         />
//                       </div>

//                       <div className="form-outline mb-4">
//                         <label className="form-label" htmlFor="form3Example4">
//                           Password
//                         </label>
//                         <input
//                           type="password"
//                           id="form3Example4"
//                           className="form-control"
//                         />
//                       </div>

//                       <button
//                         type="submit"
//                         className="btn btn-primary btn-block mb-4"
//                       >
//                         Sign up
//                       </button>

//                       <div className="text-center">
//                         <p>or sign up with:</p>
//                         <button
//                           type="button"
//                           className="btn btn-link btn-floating mx-1"
//                         >
//                           <FacebookIcon />
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-link btn-floating mx-1"
//                         >
//                           <GoogleSignInButton
//                             handleModalClose={handleModalClose}
//                           />
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-link btn-floating mx-1"
//                         >
//                           <TwitterIcon />
//                         </button>
//                         <button
//                           type="button"
//                           className="btn btn-link btn-floating mx-1"
//                         >
//                           <InstagramIcon />
//                         </button>
//                       </div>
//                     </form>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default LoginComponent;

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
const LoginComponent = () => {
  const [isFirstDivVisible, setIsFirstDivVisible] = useState(true);
  const [isSecondDivVisible, setIsSecondDivVisible] = useState(false);

  const toggleDivs = () => {
    setIsFirstDivVisible(!isFirstDivVisible);
    setIsSecondDivVisible(!isSecondDivVisible);
  };

  return (
    <>
      {isFirstDivVisible && (
        <div class="col-lg-6 col-md-12 form-info">
          <div class="form-section">
            <div class="logo clearfix">
              <a href="login-2.html">
                <img
                  src="https://i.postimg.cc/3wgSvKbP/bloggerlogo.png"
                  alt="logo"
                />
              </a>
            </div>
            <h3>Sign Into Your Account</h3>
            <div class="login-inner-form">
              <form action="#" method="GET">
                <div class="form-group form-box">
                  <input
                    type="email"
                    name="email"
                    class="form-control"
                    placeholder="Email Address"
                    aria-label="Email Address"
                  />
                  <i class="flaticon-mail-2"></i>
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
                  <i class="flaticon-password"></i>
                </div>
                <div className="checkbox form-group form-box">
                  <div class="form-check checkbox-theme">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberMe"
                    />
                    <label class="form-check-label" for="rememberMe">
                      Remember me
                    </label>
                  </div>
                  <a href="forgot-password-2.html">Forgot Password</a>
                </div>
                <div className="form-group mb-0">
                  <button type="submit" class="btn-md btn-theme w-100">
                    Login
                  </button>
                </div>
                <p class="text">
                  Don't have an account?
                  <a href="#" onClick={toggleDivs}>
                    {" "}
                    Register here
                  </a>
                </p>
                <div className="loginSection">
                  <button>
                    <img src="/images/home/new-google.svg" alt="" />
                    Google
                  </button>
                  <button>
                    <img src="/images/home/email.svg" alt="" />
                    Email
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
      {isSecondDivVisible && (
        <div class="col-lg-6 col-md-12 form-info">
          <div class="form-section">
            <div class="logo clearfix">
              <a href="login-20.html">
                <img
                  src="https://i.postimg.cc/3wgSvKbP/bloggerlogo.png"
                  alt="logo"
                />
              </a>
            </div>
            <h3>Create An Cccount</h3>
            <div class="login-inner-form">
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
                <div class="checkbox form-group form-box">
                  <div class="form-check checkbox-theme">
                    <input
                      class="form-check-input"
                      type="checkbox"
                      value=""
                      id="rememberMe"
                    />
                    <label class="form-check-label" for="rememberMe">
                      I agree to the <a href="#">terms of service</a>
                    </label>
                  </div>
                </div>
                <div class="form-group mb-0">
                  <button type="submit" class="btn-md btn-theme w-100">
                    Sign Up
                  </button>
                </div>
                <p class="text">
                  Already a member?
                  <a href="#" onClick={toggleDivs}>
                    {" "}
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default LoginComponent;

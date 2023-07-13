import { Box, Checkbox, Modal } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./style";
import SignupComponent from "./signup";
import LoginComponent from "./login";
import CloseIcon from "@mui/icons-material/Close";
import GoogleSignInButton from "./googlelogin/index";

const AuthenticationComponent = ({ open, handleModalClose }) => {
  const [isOpen, setOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [agree, setAgree] = useState(false);
  const [isLoginandSignupModal, setIsLoginandSignupModal] = useState(false);

  const handleSignupwithnewuser = useCallback(() => {
    setIsLoginandSignupModal(true);
  }, []);

  const handleLoginFlowwithUser = useCallback(() => {
    setIsLoginandSignupModal(false);
  }, []);

  useEffect(() => {
    const storedIsLoginOpen = localStorage.getItem("isLoginOpen");
    if (storedIsLoginOpen) {
      setIsLoginOpen(storedIsLoginOpen === "true");
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("isLoginOpen", isLoginOpen.toString());
  }, [isLoginOpen]);

  useEffect(() => {
    return () => {
      if (handleModalClose) {
        setOpen(false);
        setIsLoginOpen(false);
        setIsLoginandSignupModal(false);
      }
    };
  }, [handleModalClose]);

  const toggleDivs = () => {
    setIsLoginOpen(!isLoginOpen);
  };

  const checkboxHandler = () => {
    setAgree(!agree);
  };

  return (
    <>
      <Modal
        style={{ zIndex: "9999" }}
        open={open}
        onClose={handleModalClose}
        closeAfterTransition
      >
        <div className="juperterLogin">
          <div className="container">
            <div className="row">
              <div className="col-md-9 mx-auto">
                <div className="row login-box">
                  <CloseIcon
                    style={{
                      cursor: "pointer",
                      background: "#000",
                      borderRadius: "16px",
                      position: "absolute",
                      right: "5px",
                      top: "5px",
                      color: "#fff", // Add this line to set the icon color
                      padding: "4px", // Add some padding to the icon
                    }}
                    onClick={handleModalClose}
                  />
                  <div
                    className="col-lg-6 col-md-12 bg-img"
                    style={{ backgroundColor: "hsl(161deg 87.73% 42.73%)" }}
                  >
                    <div className="info">
                      <div className="info-text">
                        <div className="welcomeHeading">
                          <h1>WELCOME JUPITER BLOG</h1>
                          <p>
                            WELCOME JUPITER BLOG is a platform where you can
                            explore the latest news, articles, and insights
                            about various topics. Whether you're interested in
                            technology, lifestyle, travel, or any other subject,
                            our blog provides valuable content to keep you
                            informed and engaged. Join our community today and
                            embark on a journey of knowledge and discovery!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 form-info">
                    <div className="login-inner-form">
                      {isLoginOpen ? (
                        <SignupComponent
                          handleLoginFlowwithUser={handleLoginFlowwithUser}
                          handleModalClose={handleModalClose}
                          setIsLoginOpen={setIsLoginOpen}
                          setIsLoginandSignupModal={setIsLoginandSignupModal}
                        />
                      ) : (
                        <LoginComponent
                          handleSignupwithnewuser={handleSignupwithnewuser}
                          handleModalClose={handleModalClose}
                          setIsLoginOpen={setIsLoginOpen}
                          setIsLoginandSignupModal={setIsLoginandSignupModal}
                        />
                      )}

                      {isLoginOpen ? (
                        <Box>
                          <div className="checkbox form-group form-box">
                            <div className="form-check checkbox-theme">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="rememberMe"
                                onClick={checkboxHandler}
                                defaultChecked={agree}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="rememberMe"
                              >
                                Remember me
                              </label>
                              <a href="forgot-password-2.html">
                                Forgot Password
                              </a>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <button
                              type="submit"
                              className="btn-md btn-theme w-100"
                              disabled={!agree}
                            >
                              Sign Up
                            </button>
                          </div>
                          <p className="text">
                            Don't have an account?
                            <a href="#" onClick={toggleDivs}>
                              Register here
                            </a>
                          </p>
                          <div className="loginSection">
                            <button>
                              <GoogleSignInButton
                                handleModalClose={handleModalClose}
                              />
                            </button>

                            <button>
                              <img src="/images/home/email.svg" alt="" />
                              Email
                            </button>
                          </div>
                        </Box>
                      ) : (
                        <Box>
                          <div className="checkbox form-group form-box">
                            <div className="form-check checkbox-theme">
                              <input
                                className="form-check-input"
                                type="checkbox"
                                value=""
                                id="rememberMe"
                              />
                              <label
                                className="form-check-label"
                                htmlFor="rememberMe"
                              >
                                I agree to the <a href="#">terms of service</a>
                              </label>
                            </div>
                          </div>
                          <div className="form-group mb-0">
                            <button
                              type="submit"
                              className="btn-md btn-theme w-100"
                            >
                              Login
                            </button>
                          </div>
                          <p className="text">
                            Already a member?
                            <a href="#" onClick={toggleDivs}>
                              Sign Up here
                            </a>
                          </p>
                        </Box>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default AuthenticationComponent;

import { Box, Checkbox, Modal, useMediaQuery } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./style";
import SignupComponent from "./signup";
import LoginComponent from "./login";
import CloseIcon from "@mui/icons-material/Close";
import GoogleSignInButton from "./googlelogin/index";

const AuthenticationComponent = ({ open, handleModalClose }) => {
  const [isOpen, setOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width:480px)");

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

  return (
    <>
      <Modal style={{ zIndex: "9999" }} open={open} onClose={handleModalClose} closeAfterTransition>
        <div className="juperterLogin" style={isMobile ? { padding: "0" } : { padding: "15px" }}>
          <div className="container">
            <div className="row">
              <div className="col-md-9 mx-auto">
                <div
                  className="row login-box"
                  style={isMobile ? { background: "#00fff5" } : { background: "#fff" }}
                >
                  <CloseIcon
                    style={{
                      cursor: "pointer",
                      background: "#000",
                      borderRadius: "16px",
                      position: "absolute",
                      right: "5px",
                      top: "5px",
                      color: "#fff",
                      padding: "4px",
                    }}
                    onClick={handleModalClose}
                  />
                  {!isMobile && (
                    <div
                      className="col-lg-6 col-md-12 bg-img"
                      style={{ backgroundColor: "hsl(161deg 87.73% 42.73%)" }}
                    >
                      <div className="info">
                        <div className="info-text">
                          <div className="welcomeHeading">
                            <h1>WELCOME Sahitya BLOG</h1>
                            <p>
                              WELCOME Sahitya BLOG, your hub for the latest news, articles, and
                              insights across various topics. Join us to explore technology,
                              lifestyle, travel, and more. Engage with valuable content, stay
                              informed, and embark on a journey of knowledge and discovery!
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  <div
                    className="col-lg-6 col-md-12 form-info"
                    style={isMobile ? { padding: "15px 15px" } : { padding: "30px 30px" }}
                  >
                    <div
                      className="login-inner-form"
                      style={
                        isMobile ? { justifyContent: "space-around" } : { justifyContent: "center" }
                      }
                    >
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
                          <p className="text">
                            Don`&apos;`t have an account?
                            <a href="#" onClick={toggleDivs}>
                              Register here
                            </a>
                          </p>
                          <div className="loginSection">
                            <button>
                              <GoogleSignInButton handleModalClose={handleModalClose} />
                            </button>

                            <button>
                              <img src="/images/home/email.svg" alt="email icon" />
                              Email
                            </button>
                          </div>
                        </Box>
                      ) : (
                        <Box>
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

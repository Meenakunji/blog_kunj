import { Box, Button, Modal, useMediaQuery } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import SignupComponent from "./signup";
import LoginComponent from "./login";
import styles from "./style";
import CloseIcon from "@mui/icons-material/Close";
import GoogleSignInButton from "./googlelogin/index";
import GoogleIcon from "@mui/icons-material/Google";
import Image from "next/image";
import React from "react";
import EmailImage from "../../../../public/images/home/email.svg";

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
              <div className="col-md-9 mx-auto" style={{ width: isMobile ? "90%" : "35%" }}>
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

                  <div
                    className="col-md-12 form-info"
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

                      <Box mt={2} display="flex" flexDirection="column" alignItems="center" gap={2}>
                        {isLoginOpen ? (
                          <>
                            <p className="text">
                              Don`&apos;`t have an account?{" "}
                              <a href="#" onClick={toggleDivs}>
                                Register here
                              </a>
                            </p>

                            <Box display="flex" flexDirection={isMobile ? "column" : "row"} gap={2}>
                              <Button
                                startIcon={
                                  <GoogleSignInButton handleModalClose={handleModalClose} />
                                }
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  textTransform: "none",
                                  backgroundColor: "#f5f5f5",
                                  padding: "8px 16px",
                                }}
                              ></Button>

                              <Button
                                startIcon={<Image src={EmailImage} alt="email icon" width={20} />}
                                sx={{
                                  display: "flex",
                                  alignItems: "center",
                                  textTransform: "none",
                                  backgroundColor: "#f5f5f5",
                                  padding: "8px 16px",
                                }}
                              >
                                Email
                              </Button>
                            </Box>
                          </>
                        ) : (
                          <p className="text">
                            Already a member?{" "}
                            <a href="#" onClick={toggleDivs}>
                              Sign In here
                            </a>
                          </p>
                        )}
                      </Box>
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

import { Box, Modal } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./style";
import SignupComponent from "./signup";
import LoginComponent from "./login";
import CloseIcon from "@mui/icons-material/Close";

const AuthenticationComponent = ({ open, handleModalClose }) => {
  const [isOpen, setOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isLoginandSignupModal, setIsLoginandSignupModal] = useState(false);

  const handleSignupwithnewuser = useCallback(() => {
    setIsLoginandSignupModal(true);
  }, []);

  const handleLoginFlowwithUser = useCallback(() => {
    setIsLoginandSignupModal(false);
  }, []);

  useEffect(() => {
    return () => {
      if (handleModalClose) {
        setOpen(false);
        setIsLoginOpen(false);
        setIsLoginandSignupModal(false);
      }
    };
  }, [handleModalClose]);

  return (
    <>
      <Modal
        style={{ zIndex: "9999" }}
        open={open}
        onClose={handleModalClose}
        closeAfterTransition
      >
        {/* <Box sx={styles.wrapper}> */}
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
                    }}
                    onClick={handleModalClose}
                  />
                  <div className="col-lg-6 col-md-12 bg-img">
                    <div className="info">
                      <div className="info-text">
                        <div className="welcomeHeading">
                          <h1>WELCOME jUPITER BLOG</h1>
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  {isLoginOpen ? (
                    <SignupComponent
                      handleLoginFlowwithUser={handleLoginFlowwithUser}
                      handleModalClose={handleModalClose}
                      toggleSnackbar={(val) => setSnackbar(val)}
                      setIsLoginOpen={setIsLoginOpen}
                      setIsLoginandSignupModal={setIsLoginandSignupModal}
                    />
                  ) : (
                    <LoginComponent
                      handleSignupwithnewuser={handleSignupwithnewuser}
                      handleModalClose={handleModalClose}
                      toggleSnackbar={(val) => setSnackbar(val)}
                      setIsLoginOpen={setIsLoginOpen}
                      setIsLoginandSignupModal={setIsLoginandSignupModal}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* </Box> */}
      </Modal>
    </>
  );
};

export default AuthenticationComponent;

// import React from "react";

// export const AuthenticationComponent = () => {
//   return <div>AuthenticationComponent</div>;
// };
import { Box, Modal } from "@mui/material";
import { useCallback, useEffect, useState } from "react";
import styles from "./style";
import SignupComponent from "./signup";
import LoginComponent from "./login";

const AuthenticationComponent = ({ open, handleModalClose }) => {
  const [isSignUp, setIsSignUp] = useState(false);
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
        setIsSignUp(false);
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
        <Box sx={styles.wrapper}>
          <Box
            sx={{
              cursor: "pointer",
              background: "#fff",
              borderRadius: "16px",
              position: "absolute",
              right: "5px",
              top: "5px",
            }}
            component="img"
            src="/images/community/close.svg"
            onClick={handleModalClose}
          />
          <Box sx={styles.FanSinUp}>
            <Box sx={styles.RightSide}>
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
            </Box>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default AuthenticationComponent;

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
        <Box sx={styles.wrapper}>
          <CloseIcon
            style={{
              cursor: "pointer",
              background: "#fff",
              borderRadius: "16px",
              position: "absolute",
              right: "5px",
              top: "5px",
            }}
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

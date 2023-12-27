import React, { memo, useCallback } from "react";
import { Slide, Snackbar } from "@mui/material";
import Alert from "@mui/material/Alert";
function SnackBar({ show, status, message, onClose }) {
  const handleClose = useCallback(() => {
    onClose({ show: false, error: "", message: "" });
  }, [onClose]);

  return (
    <Snackbar
      open={show}
      style={{ zIndex: 99999 }}
      autoHideDuration={5000}
      anchorOrigin={{ vertical: "top", horizontal: "right" }}
      TransitionComponent={(props) => <Slide {...props} direction="left" />}
      onClose={handleClose}
    >
      <Alert
        elevation={6}
        variant="filled"
        severity={status}
        onClose={handleClose}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default memo(SnackBar);

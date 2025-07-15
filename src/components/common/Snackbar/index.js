import React, { memo, useCallback } from "react";
import { Slide, Snackbar } from "@mui/material";
// import alert from "@mui/material/alert";
import { Alert } from '@mui/material';

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
      <alert
        elevation={6}
        variant="filled"
        severity={status}
        onClose={handleClose}
      >
        {message}
      </alert>
    </Snackbar>
  );
}

export default memo(SnackBar);

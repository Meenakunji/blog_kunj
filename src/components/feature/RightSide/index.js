import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import styles from "./style";

const RightSideProfile = () => {
  const { userData } = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState(userData?.name || "");
  const [bio, setBio] = useState(userData?.bio || "");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    // Handle save logic here (e.g., update profile information)
    console.log("Profile updated:", { name, bio });
    handleClose();
  };

  return (
    <Box sx={styles.profileRight}>
      {userData?.profilePic ? (
        <img
          src={userData.profilePic}
          alt="Profile Picture"
          style={{
            width: "88px",
            height: "88px",
            objectFit: "cover",
          }}
        />
      ) : (
        "P"
      )}
      <Typography component="p">{userData?.name}</Typography>
      <Box sx={styles.buttonGroup}>
        <Button sx={styles.followBtn}>
          <Typography component="span">{userData?.followCount} Follow</Typography>
        </Button>
        <Button sx={styles.subscribe} onClick={handleClickOpen}>
          Edit Profile
        </Button>
      </Box>
      {/* Modal for editing profile */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Profile</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <TextField
            margin="dense"
            id="bio"
            label="Bio"
            type="text"
            fullWidth
            variant="standard"
            multiline
            rows={4}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default RightSideProfile;

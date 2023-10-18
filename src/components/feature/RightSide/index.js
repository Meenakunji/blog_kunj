import React from "react";
import styles from "./style";
import { Box, Button, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const RightSideProfile = () => {
  const { isLoggedIn, userData } = useSelector((state) => state.user);
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
          Follow{" "}
          <Typography component="span">{userData?.followCount}</Typography>
        </Button>
        <Button sx={styles.subscribe}>Subscribe</Button>
      </Box>
    </Box>
  );
};

export default RightSideProfile;

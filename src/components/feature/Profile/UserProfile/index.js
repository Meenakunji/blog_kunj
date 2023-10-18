import { Box, Typography } from "@mui/material";
import React from "react";
import ListingBlog from "../../Blog/ListingBlog";
import { useSelector } from "react-redux";
import style from "../style";

const UserProfile = () => {
  return (
    <Box sx={style.aboutSection}>
      <Typography component="H3">Tell the world about yourself</Typography>
      <Typography component="p">
        Here’s where you can share more about yourself: your history, work
        experience, accomplishments, interests, dreams, and more. You can even
        add images and use rich text to personalize your bio.
      </Typography>
    </Box>
  );
};

export default UserProfile;

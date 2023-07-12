import { Box, Typography } from "@mui/material";
import React from "react";
import style from "../style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const UserProfile = () => {
  return (
    <>
      <Box sx={style.profileBg}>
        <Box sx={style.profileDetails}>
          <Box sx={style.profileSection}>
            <Box sx={style.profileLeftSide}>
              <img
                src="https://cdn.pixabay.com/photo/2016/11/19/09/45/man-1838330_1280.jpg"
                alt=""
              />
            </Box>
            <Box sx={style.profileRightSide}>
              <Typography variant="h4">SARAH JEFFERSON</Typography>
              <p>Ui Developer</p>
            </Box>
          </Box>
          {/* <Box sx={style.profileEdit}>
            <Box sx={style.profileIcon}>
              <a href="#" id="profile_page_link"><span class="icon-user icon"> <AccountCircleIcon /></span><span class="label">Profile</span></a>
            </Box>
          </Box> */}
        </Box>
      </Box>
    </>
  );
};

export default UserProfile;

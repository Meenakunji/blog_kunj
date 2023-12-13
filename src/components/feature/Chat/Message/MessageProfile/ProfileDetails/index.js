import React from "react";
import style from "../style";
import { Box, Switch, Typography } from "@mui/material";

import DescriptionIcon from "@mui/icons-material/Description";

const ProfileDetails = () => {
  return (
    <>
      <Box sx={style.profileImg}>
        <img src="https://media.istockphoto.com/id/1567416340/photo/excited-indian-man-celebrating-by-seeing-mobile-phone-while-sitting-on-sofa-at-home-concept.jpg?s=1024x1024&w=is&k=20&c=PukP0UYraSN2BFL36B3TlNBuD1i63-soOh2pHRuLM0g=" />
        <Typography variant="h3">Farhan UI Designer</Typography>
        <Typography variant="body1">Arshad</Typography>
      </Box>
      <Box sx={style.notifications}>
        <Typography variant="body1">Notifications</Typography>
        <Typography variant="body1">Notifications</Typography>
      </Box>
      <Box sx={style.profileList}>
        <Box sx={style.profileHeading}>
          <Typography variant="h5">Recent Files </Typography>
          <span>(25 files)</span>
        </Box>
        <ul>
          <li>
            <span>
              <DescriptionIcon />
              line
            </span>{" "}
            <span>...</span>
          </li>
          <li>
            <span>
              <DescriptionIcon />
              line
            </span>{" "}
            <span>...</span>
          </li>
          <li>
            <span>
              <DescriptionIcon />
              line
            </span>{" "}
            <span>...</span>
          </li>
          <li>
            <span>
              <DescriptionIcon />
              line
            </span>{" "}
            <span>...</span>
          </li>
        </ul>
      </Box>

      <Box sx={style.galleryBox}>
        <Box sx={style.profileHeading}>
          <Typography variant="h5">Recent Files </Typography>
          <span>(25 files)</span>
        </Box>
        <Box sx={style.gallerySection}>
          <Box sx={style.galleryList}>
            {" "}
            <img src="https://media.istockphoto.com/id/1567416340/photo/excited-indian-man-celebrating-by-seeing-mobile-phone-while-sitting-on-sofa-at-home-concept.jpg?s=1024x1024&w=is&k=20&c=PukP0UYraSN2BFL36B3TlNBuD1i63-soOh2pHRuLM0g=" />
          </Box>
          <Box sx={style.galleryList}>
            {" "}
            <img src="https://media.istockphoto.com/id/1567416340/photo/excited-indian-man-celebrating-by-seeing-mobile-phone-while-sitting-on-sofa-at-home-concept.jpg?s=1024x1024&w=is&k=20&c=PukP0UYraSN2BFL36B3TlNBuD1i63-soOh2pHRuLM0g=" />
          </Box>
          <Box sx={style.galleryList}>
            {" "}
            <img src="https://media.istockphoto.com/id/1567416340/photo/excited-indian-man-celebrating-by-seeing-mobile-phone-while-sitting-on-sofa-at-home-concept.jpg?s=1024x1024&w=is&k=20&c=PukP0UYraSN2BFL36B3TlNBuD1i63-soOh2pHRuLM0g=" />
          </Box>
          <Box sx={style.galleryList}>
            {" "}
            <img src="https://media.istockphoto.com/id/1567416340/photo/excited-indian-man-celebrating-by-seeing-mobile-phone-while-sitting-on-sofa-at-home-concept.jpg?s=1024x1024&w=is&k=20&c=PukP0UYraSN2BFL36B3TlNBuD1i63-soOh2pHRuLM0g=" />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ProfileDetails;

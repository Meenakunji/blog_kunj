import { Box, Button, Typography } from "@mui/material";
import React from "react";
import style from "../../style";
import { useSelector } from "react-redux";

export const TagBanner = () => {
  const { tagListName } = useSelector((state) => state.user);
  return (
    <Box>
      <Box sx={style.bannerConatiner}>
        <Box sx={style.subConatiner}>
          <Box sx={style.bannerContent}>
            <Typography component="h2">{tagListName}</Typography>
            <Box sx={style.topicCSS}>
              Topic<Box className="ru s">·</Box>13.4K Followers
              <Box className="ru s">·</Box>75K Stories
            </Box>
            <Box sx={style.followBtn}>
              <Button>Follow</Button>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

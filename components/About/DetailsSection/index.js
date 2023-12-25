import { Box, Typography } from "@mui/material";
import React from "react";
import ReactPlayer from "react-player";
import style from "../style";

export const AboutDetailsSection = ({ aboutAPIResult }) => {
  return (
    <>
      {aboutAPIResult?.AboutDetailsData?.flat(1)?.map((item, index) => {
        return (
          <Box key={index}>
            <Box sx={style.aboutDetails}>
              <Typography variant="body1" component="p">
                {item?.deatils}
              </Typography>
              <Typography variant="body1" component="p">
                {item?.desctiption}
              </Typography>
            </Box>
            <Box sx={style.aboutPlay}>
              <ReactPlayer
                url={`https://www.youtube.com/watch?v=${item?.blogVideoEmbidID}`}
                width="100%"
                height="100%"
                controls={true}
              />
            </Box>
          </Box>
        );
      })}
    </>
  );
};

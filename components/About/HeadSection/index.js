import { Box, Typography } from "@mui/material";
import React from "react";
import style from "../style";

export const AboutMainSection = ({ aboutAPIResult }) => {
  return (
    <>
      {aboutAPIResult?.AboutHeadSectionData?.flat(1)?.map((item, index) => {
        return (
          <Box sx={style.mainSection} key={index}>
            <Typography variant="h2" component="h2">
              {item?.Title}
            </Typography>
            <Typography variant="h4" component="h1">
              {item?.subTitle}
            </Typography>
            <Typography variant="body1" component="p">
              {item?.desctiption}
            </Typography>
          </Box>
        );
      })}
    </>
  );
};

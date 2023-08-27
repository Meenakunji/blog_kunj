import { Box, Typography } from "@mui/material";
import React from "react";
import style from "../style";
import CopyAllTwoToneIcon from "@mui/icons-material/CopyAllTwoTone";

export const BlogModalHeader = () => {
  return (
    <Box sx={style.mainContainer}>
      <Typography variant="h5">Blog Model Options</Typography>
      <Box sx={style.modalTypeContainer}>
        <Typography variant="h6">Model Type</Typography>
        <Box>
          <CopyAllTwoToneIcon />
        </Box>
      </Box>
    </Box>
  );
};

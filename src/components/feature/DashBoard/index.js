import { Box } from "@mui/material";
import React from "react";
import { DashBoardBannerComponent } from "./BannerPart";
import { DashBoardGarphSection } from "./GarphPart";
import style from "./style";

export const DashBoardComponent = () => {
  return (
    <Box sx={style.container}>
      <DashBoardBannerComponent />
      <DashBoardGarphSection />
    </Box>
  );
};

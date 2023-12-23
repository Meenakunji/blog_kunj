import React from "react";
import { Box, Container, Typography } from "@mui/material";
import style from "../components/About/style";
import Image from "next/image";
import { AboutComponent } from "../components/About";

export default function about() {
  return (
    <Box sx={style.container}>
      <AboutComponent />
    </Box>
  );
}

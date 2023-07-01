import { Box } from "@mui/material";
import React from "react";
import style from "./style";
import Typewriter from "typewriter-effect";

function HomeBanner() {
  return (
    <>
      <Box sx={style.homeBanner}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("WEL COME YOU")
              .pauseFor(100)
              .deleteAll()
              .typeString("CREATE BLOG")
              .start();
          }}
        />
      </Box>
    </>
  );
}

export default HomeBanner;

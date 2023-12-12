import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import style from "../style";

export const UserDetails = () => {
  return (
    <Box sx={style.UserDetailsConatiner}>
      <Box style={{ marginRight: "10px" }}>
        <Image
          src={"/images/home/ChatUser.svg"}
          height={40}
          width={40}
          alt="user image"
        />
      </Box>
      <Box>
        <Typography variant="h1">Farhan</Typography>
        <Typography
          variant="body1"
          style={{ lineHeight: "17px", fontSize: "14px" }}
        >
          Although MongoDB is powerful, incorporating many features from...
        </Typography>
      </Box>
      <Box style={{ flexDirection: "column" }}>
        <Typography component="span">20s</Typography>
        <Image src="/images/home/read.svg" width={20} height={20} alt="read" />
      </Box>
    </Box>
  );
};

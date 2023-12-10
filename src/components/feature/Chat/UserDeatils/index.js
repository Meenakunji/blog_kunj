import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import style from "../style";

export const UserDetails = () => {
  return (
    <Box sx={style.UserDetailsConatiner}>
      <Box style={{ marginRight: "10px" }}>
        <Image
          src={"/images/home/ChatUser.svg"}
          height={58}
          width={58}
          alt="user image"
        />
      </Box>
      <Box>
        <Typography component="h1">Pankaj Kumar Meena</Typography>
        <Typography component="span">
          Although MongoDB is powerful, incorporating many features from...
        </Typography>
      </Box>
      <Box style={{ flexDirection: "column" }}>
        <Typography component="span"> 20s</Typography>
        <Image src="/images/home/read.svg" width={20} height={20} alt="read" />
      </Box>
    </Box>
  );
};

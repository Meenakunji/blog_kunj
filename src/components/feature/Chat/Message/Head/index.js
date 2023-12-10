import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import style from "../style";

export const HeadSectionMessageDetails = () => {
  return (
    <Box sx={style.messagedetailsContainer}>
      <Box sx={style.userHeadSection}>
        <Box sx={style.userSection}>
          <Image
            src={"/images/home/ChatUser.svg"}
            width={50}
            height={50}
            alt="user image"
          />
          <Box sx={style.userDetail}>
            <Typography component="h1">Pankaj Kumar Meena</Typography>
            <Typography component="span">
              <Image
                src="/images/home/activeuser.svg"
                width={10}
                height={10}
                alt="active user"
              />
              Active Now
            </Typography>
          </Box>
        </Box>

        <Box sx={style.UserSettings}>
          <Box sx={style.callIcon}>
            <Image
              src="/images/home/callingIcon.svg"
              width={25}
              height={25}
              alt="calling icon"
            />
          </Box>
          <Box sx={style.callIcon}>
            <Image
              src="/images/home/videoCall.svg"
              width={25}
              height={25}
              alt="calling icon"
            />
          </Box>
          <Box sx={style.callIcon}>
            <Image
              src="/images/home/more.svg"
              width={25}
              height={25}
              alt="calling icon"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

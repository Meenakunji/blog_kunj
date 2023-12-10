import { Box, Typography } from "@mui/material";
import React from "react";
import Image from "next/image";
import style from "./style";
import { HeadSectionMessageDetails } from "./Head";
import { MessageDetailsSection } from "./MessageDetails";
import { MessageInputsection } from "./Input";

export const MessageDetails = () => {
  return (
    <Box sx={style.messagedetailsContainer}>
      <HeadSectionMessageDetails />
      <Box sx={style.chatSection}>
        <Box>
          <MessageDetailsSection />
        </Box>
        <Box sx={style.chatInputSection}>
          <MessageInputsection />
        </Box>
      </Box>
    </Box>
  );
};

import { Box } from "@mui/material";
import React from "react";
import { ChatGroup } from "./ChatGroup";
import { MessageDetails } from "./Message";
import style from "./style";

export const ChatMainComponet = () => {
  return (
    <Box sx={style.mainContainer}>
      <Box style={{ width: "30%" }}>
        <ChatGroup />
      </Box>

      <Box sx={style.messageContainer}>
        <MessageDetails />
      </Box>
    </Box>
  );
};

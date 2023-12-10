import { Box } from "@mui/material";
import React from "react";
import style from "./style";
import { ChatGroup } from "./ChatGroup";
import { MessageDetails } from "./Message";

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

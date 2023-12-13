import { Box, Button, Divider, Typography } from "@mui/material";
import React from "react";
import { UserDetails } from "../UserDeatils";
import style from "../style";
import { EnhancedSearch } from "../../../common/SearchInput";

export const ChatGroup = () => {
  return (
    <Box sx={style.chatgroupConatiner}>
      <Box sx={{ padding: "15px" }}>
        <Typography variant="h2">Messages</Typography>
        {/* user input and create group button */}
        <EnhancedSearch />
        <Button
          type="button"
          className="btnPopup"
          // onClick={() => openDrawerCell()}
          style={{ margin: "20px 0" }}
        >
          + Start a New Chat
        </Button>
      </Box>
      <Box
        style={{
          overflow: "scroll",
          overflowX: "hidden",
          padding: "15px",
          height: "526px",
        }}
      >
        <UserDetails />
        <UserDetails />
        <UserDetails />
        <UserDetails />
        <UserDetails />
        <UserDetails />
        <UserDetails />
        <UserDetails />
        <UserDetails />
        <UserDetails />
        <UserDetails />
        <UserDetails />
        <UserDetails />
        <UserDetails />
      </Box>
        
    </Box>
  );
};
